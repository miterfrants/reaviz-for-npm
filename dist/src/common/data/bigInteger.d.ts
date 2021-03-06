import bigInt from 'big-integer';
import { ChartDataTypes, ChartInternalDataTypes, ChartNestedDataShape, ChartShallowDataShape } from './types';
export declare function normalizeValue(value: ChartDataTypes, maxBigInt: bigInt.BigInteger): ChartInternalDataTypes;
export declare function normalizeValueForFormatting(value: ChartDataTypes): ChartInternalDataTypes;
export declare function getMaxBigIntegerForNested(series: ChartNestedDataShape[]): bigInt.BigInteger;
export declare function getMaxBigIntegerForShallow(series: ChartShallowDataShape[]): bigInt.BigInteger;
