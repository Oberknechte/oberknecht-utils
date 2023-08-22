import { extendedTypeof } from "./";

export class arrayInsert {
  static insertBefore = (arr: any[], beforeElement: any, elem: any): any[] => {
    let r = [];
    if (!arr || extendedTypeof(arr) !== "array") return r;
    if (!beforeElement || arr.indexOf(beforeElement) === -1)
      return [...r, elem];

    let beforeIndex = arr.indexOf(beforeElement);
    return [...arr.slice(0, beforeIndex), elem, ...arr.slice(beforeIndex)];
  };

  static insertAfter = (arr: any[], afterElement: any, elem: any): any[] => {
    let r = [];
    if (!arr || extendedTypeof(arr) !== "array") return r;
    if (!afterElement || arr.indexOf(afterElement) === -1) return [...r, elem];

    let afterIndex = arr.indexOf(afterElement);
    return [
      ...arr.slice(0, afterIndex + 1),
      elem,
      ...arr.slice(afterIndex + 1),
    ];
  };

  static insertBeforeIndex = (
    arr: any[],
    beforeIndex: number,
    elem: any
  ): any[] => {
    let r = [];
    if (!arr || extendedTypeof(arr) !== "array") return r;

    return [...arr.slice(0, beforeIndex), elem, ...arr.slice(beforeIndex)];
  };

  static insertAfterIndex = (
    arr: any[],
    afterIndex: number,
    elem: any
  ): any[] => {
    let r = [];
    if (!arr || extendedTypeof(arr) !== "array") return r;

    return [
      ...arr.slice(0, afterIndex + 1),
      elem,
      ...arr.slice(afterIndex + 1),
    ];
  };
}
