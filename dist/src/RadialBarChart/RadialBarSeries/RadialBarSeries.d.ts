import { FC, ReactElement } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { RadialBar, RadialBarProps } from './RadialBar';
import { ColorSchemeType } from '../../common/color';
import { TooltipAreaProps, TooltipArea } from '../../common/Tooltip';
export interface RadialBarSeriesProps {
    /**
     * Parsed data shape. Set internally by `RadialBarChart`.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * Color scheme for the series.
     */
    colorScheme: ColorSchemeType;
    /**
     * The inner radius for the chart center.
     */
    innerRadius: number;
    /**
     * The outer radius for the chart center.
     */
    outerRadius: number;
    /**
     * D3 scale for X Axis. Set internally by `RadialBarChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `RadialBarChart`.
     */
    yScale: any;
    /**
     * Id set internally by `RadialBarChart`.
     */
    id: string;
    /**
     * Bar that is rendered.
     */
    bar: ReactElement<RadialBarProps, typeof RadialBar>;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Height of the chart. Set internally by `RadialBarChart`.
     */
    height: number;
    /**
     * Width of the chart. Set internally by `RadialBarChart`.
     */
    width: number;
    /**
     * Tooltip for the chart area.
     */
    tooltip: ReactElement<TooltipAreaProps, typeof TooltipArea>;
}
export declare const RadialBarSeries: FC<Partial<RadialBarSeriesProps>>;
