import { splice } from "./arrayModifiers/splice";
import { moveByIndex } from "./arrayModifiers/moveByIndex";
import { removeArrayDuplicates } from ".";
import { push } from "./arrayModifiers/push";
export declare class arrayModifiers {
    static splice: typeof splice;
    static moveByIndex: typeof moveByIndex;
    static removeDuplicates: typeof removeArrayDuplicates;
    static push: typeof push;
}
