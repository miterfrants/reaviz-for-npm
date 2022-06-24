import { ChartNestedDataShape, ChartInternalNestedDataShape } from './types';
export declare type StackTypes = 'default' | 'expand' | 'diverging';
/**
 * Builds a stack dataset from the standard data format.
 */
export declare function buildBarStackData(data?: ChartNestedDataShape[], offset?: StackTypes, direction?: string): ChartInternalNestedDataShape[];
