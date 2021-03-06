import { FC } from 'react';
import { InterpolationTypes } from '../../common/utils/interpolation';
import { ChartInternalDataShape } from '../../common/data';
import { PropFunctionTypes } from '../../common/utils/functions';
export interface LineProps extends PropFunctionTypes {
    /**
     * Id set internally by `AreaChart`.
     */
    id: string;
    /**
     * Parsed data shape. Set internally by `AreaChart`.
     */
    data: ChartInternalDataShape[];
    /**
     * Width of the chart. Set internally by `AreaChart`.
     */
    width: number;
    /**
     * Interpolation for the area. Set internally by `AreaSeries`.
     */
    interpolation: InterpolationTypes;
    /**
     * Color for the area. Set internally by `AreaSeries`.
     */
    color: any;
    /**
     * D3 scale for X Axis. Set internally by `AreaChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `AreaChart`.
     */
    yScale: any;
    /**
     * Index of the area in the series. Set internally by `AreaSeries`.
     */
    index: number;
    /**
     * Whether to animate the enter/update/exit. Set internally by `AreaSeries`.
     */
    animated: boolean;
    /**
     * Stroke width of the line.
     */
    strokeWidth: number;
    /**
     * Show the stroke if there is no value.
     */
    showZeroStroke: boolean;
    /**
     * Internal property to identify if there is a area or not.
     */
    hasArea: boolean;
}
export declare const Line: FC<Partial<LineProps>>;
