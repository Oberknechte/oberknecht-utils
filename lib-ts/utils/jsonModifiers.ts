import {
  addAppendKeysToObject,
  addKeysToObject,
  concatJSON,
  createObjectFromKeys,
  deleteKeyFromObject,
  getAllObjectKeysTree,
  getByObjectFromTree,
  getKeyFromObject,
} from ".";
import { deleteKeysFromJSON } from "./jsonModifiers/deleteKeysFromJSON";

export class jsonModifiers {
  static addAppendKeysToObject = addAppendKeysToObject;
  static addKeysToObject = addKeysToObject;
  static concatJSON = concatJSON;
  static createObjectFromKeys = createObjectFromKeys;
  static deleteKeyFromObject = deleteKeyFromObject;
  static getAllObjectKeysTree = getAllObjectKeysTree;
  static getByObjectFromTree = getByObjectFromTree;
  static getKeyFromObject = getKeyFromObject;
  static deleteKeysFromJSON = deleteKeysFromJSON;
}
