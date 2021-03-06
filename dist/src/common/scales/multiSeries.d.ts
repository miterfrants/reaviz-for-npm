/**
 * Get the group scale aka x0.
 */
export declare function getGroupScale({ dimension, padding, data, direction }: {
    dimension: any;
    padding: any;
    data: any;
    direction?: string;
}): import("d3-scale").ScaleBand<string>;
/**
 * Get the inner scale aka x1.
 */
export declare function getInnerScale({ groupScale, padding, data, prop }: {
    groupScale: any;
    padding: any;
    data: any;
    prop?: string;
}): import("d3-scale").ScaleBand<string>;
