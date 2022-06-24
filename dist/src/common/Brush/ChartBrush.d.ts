import { Component } from 'react';
import { BrushConfiguration } from './Brush';
import { BrushChangeEvent } from './BrushSlice';
export interface ChartBrushProps extends BrushConfiguration {
    scale: any;
    height: number;
    width: number;
    children: any;
}
export declare class ChartBrush extends Component<ChartBrushProps, {}> {
    static defaultProps: Partial<ChartBrushProps>;
    getBrushOffset(): {
        start: any;
        end: any;
    };
    onBrushChange(event: BrushChangeEvent): void;
    render(): JSX.Element;
}
