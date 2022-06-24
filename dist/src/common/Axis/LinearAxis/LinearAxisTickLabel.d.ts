import { Component, ReactElement } from 'react';
import { LinearAxisTickLine, LinearAxisTickLineProps } from './LinearAxisTickLine';
export interface LinearAxisTickLabelProps {
    text: string;
    fullText: string;
    angle: number;
    orientation: 'horizontal' | 'vertical';
    half: 'start' | 'end' | 'center';
    line: ReactElement<LinearAxisTickLineProps, typeof LinearAxisTickLine>;
    format?: (v: any) => any;
    fill: string;
    fontSize: number;
    fontFamily: string;
    rotation: boolean | number;
    padding: number | {
        fromAxis: number;
        alongAxis: number;
    };
    textAnchor?: 'start' | 'end' | 'middle';
    position: 'start' | 'end' | 'center';
    align: 'start' | 'end' | 'center' | 'inside' | 'outside';
    className?: any;
}
export declare class LinearAxisTickLabel extends Component<LinearAxisTickLabelProps> {
    static defaultProps: Partial<LinearAxisTickLabelProps>;
    getAlign(): "start" | "end" | "center";
    getTickLineSpacing(): number[];
    getOffset(): {
        [x: string]: number;
    };
    getTextPosition(): {
        transform: string;
        textAnchor: string;
        alignmentBaseline: "middle" | "baseline" | "hanging";
    };
    render(): JSX.Element;
}
