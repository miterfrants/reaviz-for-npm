import { ChartShallowDataShape } from './types';
import { Direction } from './builder';
export declare const buildWaterfall: (series: ChartShallowDataShape[], direction?: Direction, binSize?: number | undefined) => import("./types").ChartInternalShallowDataShape[];
