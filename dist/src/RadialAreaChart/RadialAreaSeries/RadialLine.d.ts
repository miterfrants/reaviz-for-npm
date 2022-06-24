import { FC } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { RadialInterpolationTypes } from '../../common/utils/interpolation';
export interface RadialLineProps {
    /**
     * Parsed data shape. Set internally by `RadialAreaChart`.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * Whether to animate the enter/update/exit. Set internally by `RadialAreaSeries`.
     */
    animated: boolean;
    /**
     * D3 scale for X Axis. Set internally by `RadialAreaChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `RadialAreaChart`.
     */
    yScale: any;
    /**
     * Color for the area. Set internally by `RadialAreaSeries`.
     */
    color: any;
    /**
     * Interpolation for the area. Set internally by `RadialAreaSeries`.
     */
    interpolation: RadialInterpolationTypes;
    /**
     * Stroke width of the line.
     */
    strokeWidth: number;
    /**
     * CSS classes to apply.
     */
    className?: string;
}
export declare const RadialLine: FC<Partial<RadialLineProps>>;
