import { splice } from "./arrayModifiers/splice";
import { moveByIndex } from "./arrayModifiers/moveByIndex";
import { arrayInsert, removeArrayDuplicates } from ".";
import { push } from "./arrayModifiers/push";
import { remove } from "./arrayModifiers/remove";
import { filterByArray } from "./arrayModifiers/filterByArray";
export declare class arrayModifiers {
    static arrayInsert: typeof arrayInsert;
    static splice: typeof splice;
    static moveByIndex: typeof moveByIndex;
    static removeDuplicates: typeof removeArrayDuplicates;
    static push: typeof push;
    static remove: typeof remove;
    static filterByArray: typeof filterByArray;
}
