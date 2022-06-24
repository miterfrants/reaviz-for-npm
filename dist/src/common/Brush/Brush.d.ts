import { PureComponent } from 'react';
import { BrushChangeEvent } from './BrushSlice';
import { ChartDataTypes } from '../data';
export interface BrushConfiguration {
    disabled?: boolean;
    fill?: string;
    domain?: [ChartDataTypes, ChartDataTypes];
    onBrushChange?: (e: any) => void;
}
export interface BrushProps {
    height: number;
    width: number;
    disabled?: boolean;
    start?: number;
    end?: number;
    onBrushChange?: (e: BrushChangeEvent) => void;
}
interface BrushState {
    isSlicing: boolean;
    isPanning: boolean;
    start?: number;
    end?: number;
    initial?: number;
}
export declare class Brush extends PureComponent<BrushProps, BrushState> {
    static defaultProps: Partial<BrushProps>;
    ref: any;
    constructor(props: BrushProps);
    componentDidUpdate(prevProps: BrushProps): void;
    getStartEnd(event: any, state?: BrushState): {
        start: number;
        end: number;
    };
    getPositionsForPanEvent(event: any): {
        x: number;
        y: number;
    };
    ensurePositionInBounds(newStart?: number, newEnd?: number, state?: BrushState): {
        start: number;
        end: number;
    };
    onMoveStart(event: any): void;
    onMove(event: any): void;
    onMoveEnd(): void;
    onMoveCancel(): void;
    onSliceChange(event: BrushChangeEvent): void;
    render(): JSX.Element;
}
export {};
