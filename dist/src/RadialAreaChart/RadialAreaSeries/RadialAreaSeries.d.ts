import { FC, ReactElement } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { ColorSchemeType } from '../../common/color';
import { RadialAreaProps, RadialArea } from './RadialArea';
import { RadialLine, RadialLineProps } from './RadialLine';
import { RadialInterpolationTypes } from '../../common/utils/interpolation';
import { RadialPointSeries, RadialPointSeriesProps } from './RadialPointSeries';
import { TooltipAreaProps, TooltipArea } from '../../common/Tooltip';
export interface RadialAreaSeriesProps {
    /**
     * Parsed data shape. Set internally by `RadialAreaChart`.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * Color scheme for the series.
     */
    colorScheme: ColorSchemeType;
    /**
     * The outer radius for the chart center.
     */
    outerRadius: number;
    /**
     * The inner radius for the chart center.
     */
    innerRadius: number;
    /**
     * D3 scale for X Axis. Set internally by `RadialAreaChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `RadialAreaChart`.
     */
    yScale: any;
    /**
     * Id set internally by `RadialAreaChart`.
     */
    id: string;
    /**
     * interpolation set internally by `RadialAreaChart`.
     */
    interpolation: RadialInterpolationTypes;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Height of the chart. Set internally by `RadialAreaChart`.
     */
    height: number;
    /**
     * Width of the chart. Set internally by `RadialAreaChart`.
     */
    width: number;
    /**
     * Area that is rendered.
     */
    area: ReactElement<RadialAreaProps, typeof RadialArea> | null;
    /**
     * Line that is rendered.
     */
    line: ReactElement<RadialLineProps, typeof RadialLine> | null;
    /**
     * Symbols used to show points.
     */
    symbols: ReactElement<RadialPointSeriesProps, typeof RadialPointSeries> | null;
    /**
     * Tooltip for the chart area.
     */
    tooltip: ReactElement<TooltipAreaProps, typeof TooltipArea>;
}
export declare const RadialAreaSeries: FC<Partial<RadialAreaSeriesProps>>;
