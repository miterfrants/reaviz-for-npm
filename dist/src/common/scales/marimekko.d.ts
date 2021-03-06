import { ChartInternalNestedDataShape } from '../data';
interface MariemkoScaleData {
    data: ChartInternalNestedDataShape[];
    width: number;
    valueScale: any;
    padding: number;
}
/**
 * Get a linear scale for the mariemko chart.
 */
export declare const getMarimekkoScale: (width: number, roundDomains: boolean) => import("d3-scale").ScaleLinear<number, number, never>;
/**
 * Builds a fake scale function to get a group scale for a marimekko value scale.
 */
export declare const getMarimekkoGroupScale: ({ data, width, valueScale, padding }: MariemkoScaleData) => any;
export {};
