import React, { Component } from 'react';
interface PanProps {
    disabled: boolean;
    threshold: number;
    cursor?: string;
    x: number;
    y: number;
    scale: number;
    matrix: any;
    width: number;
    height: number;
    constrain: boolean;
    globalPanning: boolean;
    onPanStart: (event: PanStartEvent) => void;
    onPanMove: (event: PanMoveEvent) => void;
    onPanEnd: (event: PanEndEvent) => void;
    onPanCancel: (event: PanCancelEvent) => void;
}
export interface PanStartEvent {
    source: 'mouse' | 'touch';
    nativeEvent: MouseEvent | TouchEvent;
}
export interface PanMoveEvent {
    source: 'mouse' | 'touch';
    x: number;
    y: number;
    nativeEvent: MouseEvent | TouchEvent;
}
export interface PanEndEvent {
    source: 'mouse' | 'touch';
    nativeEvent: MouseEvent | TouchEvent;
}
export interface PanCancelEvent {
    source: 'mouse' | 'touch';
    nativeEvent: MouseEvent | TouchEvent;
}
export declare class Pan extends Component<PanProps> {
    static defaultProps: Partial<PanProps>;
    prevXPosition: number;
    prevYPosition: number;
    started: boolean;
    deltaX: number;
    deltaY: number;
    childRef: React.RefObject<SVGGElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    disposeHandlers(): void;
    checkThreshold(): boolean;
    onPanStart(nativeEvent: any, source: 'mouse' | 'touch'): void;
    onPanMove(x: number, y: number, source: 'mouse' | 'touch', nativeEvent: any): void;
    onPanEnd(nativeEvent: any, source: 'mouse' | 'touch'): void;
    pan(x: number, y: number, nativeEvent: any, source: 'mouse' | 'touch'): boolean;
    onMouseDown: (event: MouseEvent) => void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    render(): JSX.Element;
}
export {};
