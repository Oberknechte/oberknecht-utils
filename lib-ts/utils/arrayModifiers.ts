import { splice } from "./arrayModifiers/splice";
import { moveByIndex } from "./arrayModifiers/moveByIndex";
import { removeArrayDuplicates } from ".";
import { push } from "./arrayModifiers/push";

export class arrayModifiers {
  static splice = splice;
  static moveByIndex = moveByIndex;
  static removeDuplicates = removeArrayDuplicates;
  static push = push;
}
