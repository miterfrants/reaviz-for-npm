import React, { Component } from 'react';
interface MoveProps {
    cursor?: string;
    disabled?: boolean;
    preventRightClick: boolean;
    disableText: boolean;
    threshold: number;
    onMoveStart: (event: any) => void;
    onMove: (event: any) => void;
    onMoveCancel: (event: any) => void;
    onMoveEnd: (event: any) => void;
}
export declare class Move extends Component<MoveProps> {
    static defaultProps: Partial<MoveProps>;
    started: boolean;
    deltaX: number;
    deltaY: number;
    prevXPosition: number;
    prevYPosition: number;
    rqf: any;
    componentWillUnmount(): void;
    disposeHandlers(): void;
    disableText(shouldDisable: boolean): void;
    setCursor(set: boolean): void;
    checkThreshold(): boolean;
    getTouchCoords(event: any): {
        clientX: any;
        clientY: any;
    };
    onMouseDown(event: React.MouseEvent): void;
    onMouseMove: (event: any) => void;
    onMouseUp: (event: any) => void;
    onTouchStart(event: React.TouchEvent): void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    render(): any;
}
export {};
