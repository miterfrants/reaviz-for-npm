export interface BoundingBox {
    width: number;
    height: number;
}
/**
 * Generate the arc slice path.
 * Reference: https://github.com/upsetjs/chartjs-chart-venn/blob/master/src/model/generate.ts#L4
 */
export declare function generateArcSlicePath(s: any, refs: any[]): string;
/**
 * Generate the star euler layout.
 * Adapted from: https://github.com/upsetjs/chartjs-chart-venn
 */
export declare function starEulerLayout(data: any[], bb: BoundingBox): {
    path: string;
    text: {
        x: number;
        y: number;
    };
    x1: number;
    y1: number;
    data: any;
    set: any;
    arcs: any;
}[];
