import {
  addAppendKeysToObject,
  addKeysToObject,
  concatJSON,
  createObjectFromKeys,
  deleteKeyFromObject,
  getAllObjectKeysTree,
  getByObjectFromTree,
  getKeyFromObject,
  filterByKeys,
  filterByTypes,
  filterByJson,
} from ".";
import { deleteKeysFromJSON } from "./jsonModifiers/deleteKeysFromJSON";
import { renameKey } from "./jsonModifiers/renameKey";

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
  static renameKey = renameKey;
  static filterByKeys = filterByKeys;
  static filterByTypes = filterByTypes;
  static filterByJson = filterByJson;
}
