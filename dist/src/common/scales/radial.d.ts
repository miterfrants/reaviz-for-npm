/**
 * Get the Y Scale for a given set of radiuses.
 * Reference: https://github.com/d3/d3-scale/issues/90
 */
export declare const getRadialYScale: (innerRadius: number, outerRadius: number, domain: any[]) => ((d: any) => number) & import("d3-scale").ScaleLinear<number, number, never>;
