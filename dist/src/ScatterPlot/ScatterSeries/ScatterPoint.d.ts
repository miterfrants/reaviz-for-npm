import { ReactNode, ReactElement, FC } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { ChartTooltip, ChartTooltipProps } from '../../common/Tooltip';
import { PropFunctionTypes } from '../../common/utils/functions';
import { ColorSchemeType } from '../../common/color';
export declare type ScatterPointProps = {
    /**
     * Whether the element is active or not. Set internally by `ScatterSeries`.
     */
    active?: boolean;
    /**
     * Size of the circle element.
     */
    size?: ((data: ChartInternalShallowDataShape) => number) | number;
    /**
     * Color of the circle.
     */
    color?: ColorSchemeType;
    /**
     * Cursor for the element.
     */
    cursor?: string;
    /**
     * D3 scale for X Axis. Set internally by `ScatterPlot`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `ScatterPlot`.
     */
    yScale: any;
    /**
     * Height of the chart. Set internally by `ScatterPlot`.
     */
    height: number;
    /**
     * Whether to animate the enter/update/exit. Set internally by `ScatterSeries`.
     */
    animated?: boolean;
    /**
     * Index of the element in the series. Set internally by `ScatterSeries`.
     */
    index: number;
    /**
     * Tooltip element.
     */
    tooltip: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * Parsed data shape. Set internally by `ScatterPlot`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * Id set internally by `ScatterPlot`.
     */
    id: string;
    /**
     * Symbol element to render.
     */
    symbol?: (data: ChartInternalShallowDataShape) => ReactNode;
    /**
     * Whether the elment is visiblbe or not.
     */
    visible?: (data: ChartInternalShallowDataShape, index: number) => boolean;
    /**
     * Event for when a symbol is clicked.
     */
    onClick?: (data: ChartInternalShallowDataShape) => void;
    /**
     * Event for when the symbol has mouse enter.
     */
    onMouseEnter?: (data: ChartInternalShallowDataShape) => void;
    /**
     * Event for when the symbol has mouse leave.
     */
    onMouseLeave?: (data: ChartInternalShallowDataShape) => void;
} & PropFunctionTypes;
export declare const ScatterPoint: FC<Partial<ScatterPointProps>>;
