import {
  expressUtilsAuthHandlerOptionsType,
  expressUtilsOptionsType,
} from "./expressUtilsTypes";

import { extendedTypeof } from "../extendedTypeof";

export class expressUtils {
  constructor(options: expressUtilsOptionsType) {}

  public sendRes(res: any, data: any, status?: number) {
    let data_: Record<string, any> = {};

    let status_ = status ?? 200;

    function getFullStack(error: any): string[] {
      let stack = [error?.stack || ""];
      if (error?.cause) {
        stack.push(...getFullStack(error.cause));
      }
      return stack;
    }

    function getFullMessage(error: any): string[] {
      let message = [error?.message || ""];
      if (error?.cause) {
        message.push(...getFullMessage(error.cause));
      }
      return message;
    }

    if (data?.error) {
      if (extendedTypeof(data.error) === "error") {
        data_.error = {
          name: data.error.name,
          message: data.error.message,
          messageStack: getFullMessage(data.error),
          stack: getFullStack(data.error),
          isapierror: true,
        };
      } else {
        data_.error = {
          message: data.error,
          isapierror: true,
        };
      }
    } else {
      switch (extendedTypeof(data)) {
        case "error": {
          data_.error = {
            name: data.name,
            message: data.message,
            messageStack: getFullMessage(data),
            stack: getFullStack(data),
            isapierror: true,
          };

          if (status_ === undefined) {
            status_ = 500;
          }

          break;
        }

        case "object":
        case "json": {
          data_ = { ...data_, ...data };
          break;
        }

        default: {
          data_.data = data;
        }
      }
    }

    data_.status = status_;

    res.status(status_).json(data_);
  }
}
