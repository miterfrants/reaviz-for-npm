import { ReactElement, FC } from 'react';
import { Bar, BarProps, BarType } from './Bar';
import { ChartInternalDataShape, Direction } from '../../common/data';
import { ColorSchemeType } from '../../common/color';
import { TooltipAreaProps, TooltipArea } from '../../common/Tooltip';
declare type BarElement = ReactElement<BarProps, typeof Bar>;
export interface BarSeriesProps {
    /**
     * Parsed data shape. Set internally by `BarChart`.
     */
    data: ChartInternalDataShape[];
    /**
     * Id of the bar chart. Set internally by `BarChart`.
     */
    id: string;
    /**
     * D3 scale for X Axis. Set internally by `BarChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `BarChart`.
     */
    yScale: any;
    /**
     * D3 scale for X Multi-Group Axis. Set internally by `BarChart`.
     */
    xScale1: any;
    /**
     * Bar element.
     */
    bar: BarElement | BarElement[];
    /**
     * Type of the chart.
     */
    type: BarType;
    /**
     * Color scheme for the chart.
     */
    colorScheme: ColorSchemeType;
    /**
     * Whether the chart is animated or not.
     */
    animated: boolean;
    /**
     * Amount of padding between each bar.
     */
    padding: number;
    /**
     * Amount of padding between each group.
     */
    groupPadding: number;
    /**
     * Whether the chart is categorical or not. Set internally by `BarChart`.
     */
    isCategorical: boolean;
    /**
     * Direction of the chart
     */
    layout: Direction;
    /**
     * The size of each bin/bucket in the bar chart.
     */
    binSize?: number;
    /**
     * Height of the chart. Set internally by `BarChart`.
     */
    height: number;
    /**
     * Width of the chart. Set internally by `BarChart`.
     */
    width: number;
    /**
     * Tooltip for the chart area.
     */
    tooltip: ReactElement<TooltipAreaProps, typeof TooltipArea> | null;
}
export declare const BarSeries: FC<Partial<BarSeriesProps>>;
export {};
