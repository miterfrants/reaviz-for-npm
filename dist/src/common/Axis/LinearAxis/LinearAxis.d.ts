import React, { Component, ReactElement } from 'react';
import { LinearAxisTickSeries, LinearAxisTickSeriesProps } from './LinearAxisTickSeries';
import { ChartDataTypes } from '../../data';
import { LinearAxisLine, LinearAxisLineProps } from './LinearAxisLine';
export interface LinearAxisDimensionChanged {
    height?: number;
    width?: number;
}
export interface LinearAxisProps {
    domain?: ChartDataTypes[];
    scaled?: boolean;
    roundDomains?: boolean;
    type: 'value' | 'time' | 'category' | 'duration';
    position: 'start' | 'end' | 'center';
    tickSeries: ReactElement<LinearAxisTickSeriesProps, typeof LinearAxisTickSeries>;
    axisLine: ReactElement<LinearAxisLineProps, typeof LinearAxisLine> | null;
    height: number;
    width: number;
    scale: any;
    orientation: 'horizontal' | 'vertical';
    onDimensionsChange: (event: LinearAxisDimensionChanged) => void;
}
interface LinearAxisState {
    height?: number;
    width?: number;
}
export declare class LinearAxis extends Component<LinearAxisProps, LinearAxisState> {
    static defaultProps: Partial<LinearAxisProps>;
    ref: React.RefObject<SVGGElement>;
    constructor(props: LinearAxisProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: LinearAxisProps): void;
    updateDimensions(): void;
    getPosition(): {
        translateX: number;
        translateY: number;
    };
    render(): JSX.Element;
}
export {};
