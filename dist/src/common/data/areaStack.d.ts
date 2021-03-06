import { ChartNestedDataShape, ChartInternalDataShape } from './types';
/**
 * Builds a stack dataset from the standard data format.
 */
export declare function buildStackData(data: ChartNestedDataShape[], normalized?: boolean): ChartInternalDataShape[];
