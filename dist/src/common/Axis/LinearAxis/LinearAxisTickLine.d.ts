import { PureComponent } from 'react';
export interface LinearAxisTickLineProps {
    height: number;
    width: number;
    orientation: 'horizontal' | 'vertical';
    size: number;
    strokeColor?: string;
    strokeWidth: number;
    position: 'start' | 'end' | 'center';
    className?: any;
}
export declare class LinearAxisTickLine extends PureComponent<LinearAxisTickLineProps> {
    static defaultProps: Partial<LinearAxisTickLineProps>;
    positionTick(): {
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    };
    render(): JSX.Element;
}
