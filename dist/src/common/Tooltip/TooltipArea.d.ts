import React, { Component, ReactElement } from 'react';
import { TooltipAreaEvent } from './TooltipAreaEvent';
import { Placement } from 'rdk';
import { ChartDataTypes, ChartInternalDataShape, ChartInternalShallowDataShape } from '../data';
import { ChartTooltip, ChartTooltipProps } from './ChartTooltip';
export interface TooltipAreaProps {
    /**
     * Popperjs placement.
     */
    placement: Placement;
    /**
     * Chart height. Set internally.
     */
    height: number;
    /**
     * Chart width. Set internally.
     */
    width: number;
    /**
     * Chart D3 XScale. Set internally.
     */
    xScale: any;
    /**
     * Chart D3 YScale. Set internally.
     */
    yScale: any;
    /**
     * Whether the tooltip is disabled or not.
     */
    disabled: boolean;
    /**
     * Color setter.
     */
    color: any;
    /**
     * Chart internal data type.
     */
    data: ChartInternalDataShape[];
    /**
     * Child elements to be contained by.
     */
    children?: any;
    /**
     * Whether the area is radial or not.
     */
    isRadial?: boolean;
    /**
     * Inner-radius to set the positioning by. Set internally.
     */
    innerRadius?: number;
    /**
     * Outer-radius to set the positioning by. Set internally.
     */
    outerRadius?: number;
    /**
     * Tooltip element.
     */
    tooltip: ReactElement<ChartTooltipProps, typeof ChartTooltip>;
    /**
     * Whether to inverse the data or not.
     */
    inverse: boolean;
    /**
     * When pointer entered mouse area.
     */
    onValueEnter: (event: TooltipAreaEvent) => void;
    /**
     * When pointer left mouse area.
     */
    onValueLeave: () => void;
    /**
     * Whether the layout is horizontal or not.
     */
    isHorizontal: boolean;
}
interface TooltipAreaState {
    visible?: boolean;
    placement?: Placement;
    value?: any;
    offsetX?: any;
    offsetY?: any;
}
interface TooltipDataShape {
    x?: ChartDataTypes;
    y?: ChartDataTypes;
    data?: ChartDataTypes | Array<ChartDataTypes | ChartInternalShallowDataShape>;
}
export declare class TooltipArea extends Component<TooltipAreaProps, TooltipAreaState> {
    static defaultProps: Partial<TooltipAreaProps>;
    prevX: number | undefined;
    prevY: number | undefined;
    state: TooltipAreaState;
    ref: React.RefObject<any>;
    getXCoord(x: number, y: number): number;
    onMouseMove(event: React.MouseEvent): void;
    onMouseLeave(): void;
    getTooltipReference(): {
        width: number;
        height: number;
        top: any;
        left: any;
    };
    transformData: (series: ChartInternalDataShape[]) => TooltipDataShape[];
    renderRadial(): JSX.Element;
    renderLinear(): JSX.Element;
    render(): JSX.Element;
}
export {};
