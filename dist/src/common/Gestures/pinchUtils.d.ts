/**
 * Gets the position between a given set of points.
 */
export declare const getMidpoint: (pointA: any, pointB: any) => {
    x: number;
    y: number;
};
/**
 * Gets the distance between a given set of points.
 */
export declare const getDistanceBetweenPoints: (pointA: any, pointB: any) => number;
/**
 * Get touch points.
 */
export declare function getTouchPoints(event: any, node: any): {
    pointA: {
        x: number;
        y: number;
    };
    pointB: {
        x: number;
        y: number;
    };
    distance: number;
    midpoint: {
        x: number;
        y: number;
    };
};
