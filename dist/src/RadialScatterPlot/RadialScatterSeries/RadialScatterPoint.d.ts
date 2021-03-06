import { ReactNode, ReactElement, FC } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { ChartTooltip, ChartTooltipProps } from '../../common/Tooltip';
export interface RadialScatterPointProps {
    /**
     * Parsed data shape. Set internally by `RadialScatterPlot`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * Index of the element in the series. Set internally by `RadialScatterSeries`.
     */
    index: number;
    /**
     * Whether the element is active or not. Set internally by `RadialScatterSeries`.
     */
    animated: boolean;
    /**
     * D3 scale for X Axis. Set internally by `RadialScatterPlot`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `RadialScatterPlot`.
     */
    yScale: any;
    /**
     * Fill for the element.
     */
    fill: string;
    /**
     * Id set internally by `RadialScatterPlot`.
     */
    id: string;
    /**
     * Color of the circle.
     */
    color: any;
    /**
     * CSS classes to apply.
     */
    className?: any;
    /**
     * Whether the element is active or not. Set internally by `RadialScatterSeries`.
     */
    active?: boolean;
    /**
     * Whether the elment is visiblbe or not.
     */
    visible?: (value: any, index: any) => boolean;
    /**
     * Symbol element to render.
     */
    symbol: (value: any) => ReactNode;
    /**
     * Size of the circle element.
     */
    size?: ((d: any) => number) | number;
    /**
     * Tooltip element.
     */
    tooltip: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * Event for when a symbol is clicked.
     */
    onClick: (event: any) => void;
    /**
     * Event for when the symbol has mouse enter.
     */
    onMouseEnter: (event: any) => void;
    /**
     * Event for when the symbol has mouse leave.
     */
    onMouseLeave: (event: any) => void;
}
export declare const RadialScatterPoint: FC<Partial<RadialScatterPointProps>>;
