import React, { Component } from 'react';
interface ZoomGestureProps {
    disabled?: boolean;
    maxZoom: number;
    minZoom: number;
    scaleFactor: number;
    scale: number;
    matrix: any;
    x: number;
    y: number;
    style?: any;
    disableMouseWheel?: boolean;
    requireZoomModifier?: boolean;
    onZoom: (event: ZoomEvent) => void;
    onZoomEnd: () => void;
}
export interface ZoomEvent {
    scale: number;
    x: number;
    y: number;
    nativeEvent: any;
}
export declare class Zoom extends Component<ZoomGestureProps> {
    static defaultProps: Partial<ZoomGestureProps>;
    firstTouch: any;
    lastDistance: any;
    timeout: any;
    childRef: React.RefObject<SVGGElement>;
    rqf: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getStep(delta: number): number;
    scale(x: number, y: number, step: number, nativeEvent: any): boolean;
    onMouseWheel: (event: any) => boolean;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    render(): JSX.Element;
}
export {};
