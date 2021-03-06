import { FC } from 'react';
import { ChartInternalShallowDataShape, Direction } from '../../common/data';
import { BarType } from './Bar';
export interface BarLabelProps {
    /**
     * Text of the label. Set internally by `Bar`.
     */
    text: string;
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
     * D3 scale for Axis. Set internally by `BarChart`.
     */
    scale: any;
    /**
     * Position of the label.
     */
    position: 'top' | 'center' | 'bottom';
    /**
     * Parsed data shape. Set internally by `BarChart`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * Color of the text.
     */
    fill: string;
    /**
     * Number of the bars in the bar group. Set internally by `BarSeries`.
     */
    barCount: number;
    /**
     * Layout of bar chart to render. Set internally by `BarSeries`.
     */
    layout: Direction;
    /**
     * Whether to animate the enter/update/exit. Set internally by `BarSeries`.
     */
    animated: boolean;
    /**
     * Type of bar chart to render. Set internally by `BarSeries`.
     */
    type: BarType;
    /**
     * Font size of the text.
     */
    fontSize: number;
    /**
     * Font family of the text.
     */
    fontFamily: string;
    /**
     * Padding of the label.
     */
    padding: number;
    /**
     * Class name to apply to the text.
     */
    className?: any;
}
export declare const BarLabel: FC<BarLabelProps>;
