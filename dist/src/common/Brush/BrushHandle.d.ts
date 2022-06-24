import { PureComponent } from 'react';
export interface BrushHandleProps {
    height: number;
    onHandleDrag: (deltaX: number) => void;
}
interface BrushHandleState {
    isDragging: boolean;
}
export declare class BrushHandle extends PureComponent<BrushHandleProps, BrushHandleState> {
    state: BrushHandleState;
    onMoveStart(): void;
    onMove(event: any): void;
    onMoveEnd(): void;
    render(): JSX.Element;
}
export {};
