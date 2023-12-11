import { addAppendKeysToObject, addKeysToObject, concatJSON, createObjectFromKeys, deleteKeyFromObject, getAllObjectKeysTree, getByObjectFromTree, getKeyFromObject, filterByKeys } from ".";
import { deleteKeysFromJSON } from "./jsonModifiers/deleteKeysFromJSON";
import { renameKey } from "./jsonModifiers/renameKey";
export declare class jsonModifiers {
    static addAppendKeysToObject: typeof addAppendKeysToObject;
    static addKeysToObject: typeof addKeysToObject;
    static concatJSON: typeof concatJSON;
    static createObjectFromKeys: typeof createObjectFromKeys;
    static deleteKeyFromObject: typeof deleteKeyFromObject;
    static getAllObjectKeysTree: typeof getAllObjectKeysTree;
    static getByObjectFromTree: typeof getByObjectFromTree;
    static getKeyFromObject: typeof getKeyFromObject;
    static deleteKeysFromJSON: typeof deleteKeysFromJSON;
    static renameKey: typeof renameKey;
    static filterByKeys: typeof filterByKeys;
}
