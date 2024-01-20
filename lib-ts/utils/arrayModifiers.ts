import { splice } from "./arrayModifiers/splice";
import { moveByIndex } from "./arrayModifiers/moveByIndex";
import { arrayInsert, removeArrayDuplicates } from ".";
import { push } from "./arrayModifiers/push";
import { remove } from "./arrayModifiers/remove";

export class arrayModifiers {
  static arrayInsert = arrayInsert;
  static splice = splice;
  static moveByIndex = moveByIndex;
  static removeDuplicates = removeArrayDuplicates;
  static push = push;
  static remove = remove;
}
