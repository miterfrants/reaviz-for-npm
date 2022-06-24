import { PureComponent } from 'react';
export interface BrushChangeEvent {
    start?: number;
    end?: number;
}
interface BrushSliceProps {
    height: number;
    width: number;
    start: number;
    end: number;
    onBrushChange: (event: BrushChangeEvent) => void;
}
interface BrushSliceState {
    isDragging: boolean;
}
export declare class BrushSlice extends PureComponent<BrushSliceProps, BrushSliceState> {
    state: BrushSliceState;
    onMoveStart(): void;
    onMove({ x }: {
        x: any;
    }): void;
    onMoveEnd(): void;
    onHandleDrag(direction: 'start' | 'end', deltaX: number): void;
    render(): JSX.Element;
}
export {};
