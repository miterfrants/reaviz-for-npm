declare type AccessorCallback = (data: any) => any;
/**
 * Given a dataset and a list of accessors, returns a unique collection.
 */
export declare function uniqueBy<T = any>(data: T[], ...accessors: AccessorCallback[]): any[];
export {};
