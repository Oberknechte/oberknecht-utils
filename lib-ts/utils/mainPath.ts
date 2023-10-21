import path from "path";
import { convertToArray } from ".";

export function mainPath(dir?: string[] | string) {
  return path.resolve(process.cwd(), ...convertToArray(dir, false));
}
