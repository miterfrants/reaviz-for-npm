import { ReactElement, FC } from 'react';
import { PointSeries, PointSeriesProps } from './PointSeries';
import { Area, AreaProps } from './Area';
import { MarkLine, MarkLineProps } from '../../common/MarkLine';
import { ChartInternalDataShape } from '../../common/data';
import { TooltipArea, TooltipAreaProps } from '../../common/Tooltip';
import { Line, LineProps } from './Line';
import { InterpolationTypes } from '../../common/utils/interpolation';
import { ColorSchemeType } from '../../common/color';
export declare type AreaChartTypes = 'standard' | 'grouped' | 'stacked' | 'stackedNormalized';
export interface AreaSeriesProps {
    /**
     * Id set internally by `AreaChart`.
     */
    id: string;
    /**
     * D3 scale for X Axis. Set internally by `AreaChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `AreaChart`.
     */
    yScale: any;
    /**
     * Parsed data shape. Set internally by `AreaChart`.
     */
    data: ChartInternalDataShape[];
    /**
     * Height of the chart. Set internally by `AreaChart`.
     */
    height: number;
    /**
     * Width of the chart. Set internally by `AreaChart`.
     */
    width: number;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Type of area chart to render.
     */
    type: AreaChartTypes;
    /**
     * Interpolation type for the area/line.
     */
    interpolation: InterpolationTypes;
    /**
     * Tooltip for the chart area.
     */
    tooltip: ReactElement<TooltipAreaProps, typeof TooltipArea>;
    /**
     * Markline for the chart.
     */
    markLine: ReactElement<MarkLineProps, typeof MarkLine> | null;
    /**
     * Symbols used to show points.
     */
    symbols: ReactElement<PointSeriesProps, typeof PointSeries> | null;
    /**
     * Line that is rendered.
     */
    line: ReactElement<LineProps, typeof Line> | null;
    /**
     * Area that is rendered.
     */
    area: ReactElement<AreaProps, typeof Area> | null;
    /**
     * Color scheme for the series.
     */
    colorScheme: ColorSchemeType;
    /**
     * Whether the chart has been zoomed or not. Set internally by `AreaChart`.
     */
    isZoomed: boolean;
}
export declare const AreaSeries: FC<Partial<AreaSeriesProps>>;
