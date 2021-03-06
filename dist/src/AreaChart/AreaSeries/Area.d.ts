import { ReactElement, FC } from 'react';
import { Gradient, GradientProps } from '../../common/Gradient';
import { Mask, MaskProps } from '../../common/Mask';
import { InterpolationTypes } from '../../common/utils/interpolation';
import { ChartInternalDataShape } from '../../common/data';
import { PropFunctionTypes } from '../../common/utils/functions';
export interface AreaProps extends PropFunctionTypes {
    /**
     * Id set internally by `AreaSeries`.
     */
    id: string;
    /**
     * Parsed data shape. Set internally by `AreaChart`.
     */
    data: ChartInternalDataShape[];
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
     * Total number of areas in the series. Set internally by `AreaSeries`.
     */
    total: number;
    /**
     * Whether to animate the enter/update/exit. Set internally by `AreaSeries`.
     */
    animated: boolean;
    /**
     * Mask to apply to the area.
     */
    mask: ReactElement<MaskProps, typeof Mask> | null;
    /**
     * Gradient to apply to the area.
     */
    gradient: ReactElement<GradientProps, typeof Gradient> | null;
}
export declare const Area: FC<Partial<AreaProps>>;
