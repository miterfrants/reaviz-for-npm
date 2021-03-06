import { ChartNestedDataShape, ChartInternalNestedDataShape } from './types';
/**
 * Builds a stack dataset from the standard data format.
 */
export declare function buildMarimekkoData(data?: ChartNestedDataShape[]): ChartInternalNestedDataShape[];
