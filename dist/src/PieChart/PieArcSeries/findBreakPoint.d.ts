declare type Coordinate = [number, number];
/**
 * Finds intermediate point between two points so that this three points
 * can be nicely connected by two lines. One of this lines must be horizontal
 */
export declare function findBreakPoint([startX, startY]: Coordinate, [endX, endY]: Coordinate): Coordinate;
export {};
