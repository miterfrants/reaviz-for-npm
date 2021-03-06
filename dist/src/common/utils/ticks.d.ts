import { TimeInterval } from 'd3-time';
/**
 * Reduce the ticks to the max number of ticks.
 */
export declare function reduceTicks<T>(ticks: T[], maxTicks: number): T[];
/**
 * Determine the max ticks for the available width.
 */
export declare function getMaxTicks(size: number, dimension: number): number;
/**
 * Formats the ticks in a duration format.
 */
export declare function getDurationTicks(domain: any, maxTicks: any): any[];
/**
 * Get the tick values from the scale.
 */
export declare function getTicks(scale: any, tickValues: any[], type: 'value' | 'category' | 'time' | 'duration', maxTicks?: number, interval?: number | TimeInterval): any;
