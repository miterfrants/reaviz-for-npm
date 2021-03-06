declare type PointObjectNotation = {
    x: number;
    y: number;
};
/**
 * Given a point position, get the closes data point in the dataset.
 */
export declare const getClosestPoint: (pos: number, scale: any, data: any, attr?: string) => any;
/**
 * Given an event, get the parent svg element;
 */
export declare const getParentSVG: (event: any) => any;
/**
 * Given an event, get the relative X/Y position for a target.
 */
export declare const getPositionForTarget: ({ target, clientX, clientY }: {
    target: any;
    clientX: any;
    clientY: any;
}) => {
    x: number;
    y: number;
};
/**
 * Gets the point from q given matrix.
 */
export declare const getPointFromMatrix: (event: any, matrix: any) => PointObjectNotation;
/**
 * Get the start/end matrix.
 */
export declare const getLimitMatrix: (height: number, width: number, matrix: any) => PointObjectNotation[];
/**
 * Constrain the matrix.
 */
export declare const constrainMatrix: (height: number, width: number, matrix: any) => boolean;
/**
 * Determine if both min and max scale fctors are going out of bounds.
 */
export declare const isZoomLevelGoingOutOfBounds: (value: any, scaleFactor: number) => boolean;
export {};
