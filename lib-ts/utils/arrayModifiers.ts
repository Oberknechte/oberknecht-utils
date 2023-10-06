import { splice } from "./arrayModifiers/splice";
import { moveByIndex } from "./arrayModifiers/moveByIndex";
import { removeArrayDuplicates } from ".";

export class arrayModifiers {
  static splice = splice;
  static moveByIndex = moveByIndex;
  static removeDuplicates = removeArrayDuplicates;
}
