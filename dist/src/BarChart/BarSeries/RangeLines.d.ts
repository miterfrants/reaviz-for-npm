import { FC } from 'react';
import { ChartInternalShallowDataShape, Direction } from '../../common/data';
import { BarType } from './Bar';
export interface RangeLinesProps {
    /**
     * Height of the bar.
     */
    height: number;
    /**
     * Width of the bar.
     */
    width: number;
    /**
     * SVG x attribute for the bar.
     */
    x: number;
    /**
     * SVG y attribute for the bar.
     */
    y: number;
    /**
     * Group index or index of the bar. Set internally by `BarSeries`.
     */
    index: number;
    /**
     * Stroke width of the range line.
     */
    strokeWidth: number;
    /**
     * D3 scale for Axis. Set internally by `BarChart`.
     */
    scale: any;
    /**
     * Position of the range line.
     */
    position: 'top' | 'bottom';
    /**
     * Parsed data shape. Set internally by `BarChart`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * Color for the range line.
     */
    color: string;
    /**
     * Total number of bars used for animation. Set internally by `BarSeries`.
     */
    barCount: number;
    /**
     * Direction of the chart. Set internally by `BarSeries`.
     */
    layout: Direction;
    /**
     * Whether to animate the enter/update/exit. Set internally by `BarSeries`.
     */
    animated: boolean;
    /**
     * Type of bar chart. Set internally by `BarSeries`.
     */
    type: BarType;
}
export declare const RangeLines: FC<Partial<RangeLinesProps>>;
