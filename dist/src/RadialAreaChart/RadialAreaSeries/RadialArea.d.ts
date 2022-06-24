import { ReactElement, FC } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { RadialGradient, RadialGradientProps } from '../../common/Gradient';
import { RadialInterpolationTypes } from '../../common/utils/interpolation';
export interface RadialAreaProps {
    /**
     * Parsed data shape. Set internally by `RadialAreaChart`.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * Whether to animate the enter/update/exit.
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
     * Interpolation for the area. Set internally by `RadialAreaSeries`.
     */
    interpolation: RadialInterpolationTypes;
    /**
     * Color for the area. Set internally by `RadialAreaSeries`.
     */
    color: any;
    /**
     * Id set internally by `RadialAreaSeries`.
     */
    id: string;
    /**
     * The inner radius for the chart center.
     */
    innerRadius: number;
    /**
     * The outer radius for the chart center.
     */
    outerRadius: number;
    /**
     * CSS classes to apply.
     */
    className?: any;
    /**
     * Gradient to apply to the area.
     */
    gradient: ReactElement<RadialGradientProps, typeof RadialGradient> | null;
}
export declare const RadialArea: FC<Partial<RadialAreaProps>>;
