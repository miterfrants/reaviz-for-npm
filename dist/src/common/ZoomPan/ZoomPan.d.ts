import React, { Component } from 'react';
import { Pan, PanMoveEvent, PanStartEvent, PanEndEvent, PanCancelEvent } from '../Gestures/Pan';
import { Zoom, ZoomEvent } from '../Gestures/Zoom';
export interface ZoomPanEvent {
    scale: number;
    x: number;
    y: number;
    type: 'zoom' | 'pan';
    nativeEvent: any;
}
export interface ZoomPanProps {
    height: number;
    width: number;
    scale: number;
    x: number;
    y: number;
    pannable: boolean;
    zoomable: boolean;
    disabled?: boolean;
    maxZoom: number;
    minZoom: number;
    zoomStep: number;
    constrain: boolean;
    globalPanning: boolean;
    disableMouseWheel?: boolean;
    requireZoomModifier?: boolean;
    onZoomPan: (event: ZoomPanEvent) => void;
    onZoom: (event: ZoomEvent) => void;
    onZoomEnd: () => void;
    onPanStart: (event: PanStartEvent) => void;
    onPanMove: (event: PanMoveEvent) => void;
    onPanEnd: (event: PanEndEvent) => void;
    onPanCancel: (event: PanCancelEvent) => void;
}
interface ZoomPanState {
    isZooming: boolean;
    isPanning: boolean;
    matrix: any;
}
export declare class ZoomPan extends Component<ZoomPanProps, ZoomPanState> {
    static defaultProps: Partial<ZoomPanProps>;
    static getDerivedStateFromProps(props: ZoomPanProps, state: ZoomPanState): {
        matrix: {
            a: number;
            b: number;
            c: number;
            d: number;
            e: number;
            f: number;
        };
    };
    zoomRef: React.RefObject<Zoom>;
    panRef: React.RefObject<Pan>;
    state: ZoomPanState;
    onPanStart(event: PanStartEvent): void;
    onPanMove(event: PanMoveEvent): void;
    onPanEnd(event: PanEndEvent): void;
    onZoom(event: ZoomEvent): void;
    onZoomEnd(): void;
    render(): JSX.Element;
}
export {};
