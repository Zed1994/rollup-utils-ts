/**
 * 查找对应节点
 * @param tree
 * @param id
 * @param key
 * @returns {undefined | any} tree | undefined
 */
export declare function treeFindDir(tree: any, id: any, key?: string): any;
export declare function translateUnicode(str: string): string;
export declare function getCoverUrl(url: string): string;
export declare function getThumbnailUrl(url: string, scale?: number): string;
/**
 * 时长转时间
 * @param duration
 */
export declare function durationToTime(duration: number): string;
export declare function sizeify(n: number): string;
export declare function toDate(stamp: number): string;
