import { Component } from 'react';
import { ZoomPanEvent } from './ZoomPan';
import { ChartInternalDataShape, ChartDataTypes } from '../data';
export interface ZoomPanChangeEvent {
    domain: [ChartDataTypes, ChartDataTypes];
    isZoomed: boolean;
}
export interface ChartZoomPanProps {
    data: ChartInternalDataShape[];
    domain?: [ChartDataTypes, ChartDataTypes];
    axisType: 'value' | 'time' | 'category' | 'duration';
    roundDomains: boolean;
    height: number;
    width: number;
    scale: number;
    offset: number;
    pannable: boolean;
    zoomable: boolean;
    disabled?: boolean;
    maxZoom: number;
    zoomStep: number;
    disableMouseWheel?: boolean;
    requireZoomModifier?: boolean;
    onZoomPan?: (event: ZoomPanChangeEvent) => void;
}
export declare class ChartZoomPan extends Component<ChartZoomPanProps> {
    static defaultProps: Partial<ChartZoomPanProps>;
    onZoomPan(event: ZoomPanEvent): void;
    getOffset(): any;
    render(): JSX.Element;
}
