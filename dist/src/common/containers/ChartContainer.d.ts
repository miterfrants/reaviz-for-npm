import React, { FC } from 'react';
import { Dimensions, Margins } from '../utils/dimensions';
import { LinearAxisDimensionChanged } from '../Axis';
export interface ChartProps {
    /**
     * Id of the chart.
     */
    id?: string;
    /**
     * Width of the chart. If not provided will autosize.
     */
    width?: number;
    /**
     * Height of the chart. If not provided will autosize.
     */
    height?: number;
    /**
     * Margins for the chart.
     */
    margins?: Margins;
    /**
     * Classnames for the chart.
     */
    className?: string;
    /**
     * Classnames for the chart.
     */
    containerClassName?: string;
    /**
     * Additional css styles.
     */
    style?: React.StyleHTMLAttributes<SVGAElement>;
    /**
     * Center the chart. Used mainly internally.
     */
    center?: boolean;
    /**
     * Center chart on X Axis only. Used mainly internally.
     */
    centerX?: boolean;
    /**
     * Center chart on Y Axis only. Used mainly internally.
     */
    centerY?: boolean;
}
export interface ChartContainerProps extends ChartProps {
    /**
     * Internal property to identify if the xAxis is visible.
     */
    xAxisVisible?: boolean;
    /**
     * Internal property to identify if the xAxis is visible.
     */
    yAxisVisible?: boolean;
    /**
     * Children elements to recieve the calculated props.
     */
    children: (props: ChartContainerChildProps) => any;
}
export interface ChartContainerChildProps extends Dimensions {
    id: string;
    chartSized?: boolean;
    yAxisSized?: boolean;
    xAxisSized?: boolean;
    updateAxes: (orientation: 'horizontal' | 'vertical', event: LinearAxisDimensionChanged) => void;
}
export declare const ChartContainer: FC<ChartContainerProps>;
