import { ChartInternalNestedDataShape, ChartShallowDataShape, ChartNestedDataShape, ChartInternalShallowDataShape } from './types';
export declare type Direction = 'vertical' | 'horizontal';
/**
 * Accepts a `ChartDataShape` and transforms it to a chart readable data shape.
 *
 * Example:
 *
 *   [{
 *    key: 'Threat Intel',
 *    data: [{ key:'2011', data: 25 }]
 *   }]
 *
 * will be transformed to:
 *
 *  [{
 *    key: 'Threat Intel',
 *    data: [
 *      key: 'Threat Intel',
 *      x: '2011',
 *      y: 25
 *    ]
 *  }]
 */
export declare function buildNestedChartData(series: ChartNestedDataShape[], sort?: boolean, direction?: Direction): ChartInternalNestedDataShape[];
/**
 * Accepts a shallow shape and normalizes it to a chart readable format.
 */
export declare function buildShallowChartData(series: ChartShallowDataShape[], direction?: Direction, binSize?: number | undefined): ChartInternalShallowDataShape[];
