import { Component, ReactElement } from 'react';
import { LinearAxisTickLabel, LinearAxisTickLabelProps } from './LinearAxisTickLabel';
import { LinearAxisTickLine, LinearAxisTickLineProps } from './LinearAxisTickLine';
import { TimeInterval } from 'd3-time';
import { LinearAxisProps } from './LinearAxis';
export interface LinearAxisTickSeriesProps {
    height: number;
    width: number;
    scale: any;
    interval?: number | TimeInterval;
    tickSize: number;
    tickValues: any[];
    orientation: 'horizontal' | 'vertical';
    label: ReactElement<LinearAxisTickLabelProps, typeof LinearAxisTickLabel> | null;
    line: ReactElement<LinearAxisTickLineProps, typeof LinearAxisTickLine> | null;
    axis: LinearAxisProps;
}
interface ProcessedTick {
    text: string;
    fullText: string;
    x: number;
    y: number;
    height: number;
    width: number;
    half: 'start' | 'end' | 'center';
}
export declare class LinearAxisTickSeries extends Component<LinearAxisTickSeriesProps> {
    static defaultProps: Partial<LinearAxisTickSeriesProps>;
    /**
     * Gets the adjusted scale given offsets.
     */
    getAdjustedScale(): (d: any) => number;
    /**
     * Gets the x/y position for a given tick.
     */
    getPosition(scaledTick: number): {
        x: number;
        y: number;
    };
    /**
     * Gets the dimension (height/width) this axis is calculating on.
     */
    getDimension(): number;
    /**
     * Calculates the rotation angle that the ticks need to be shifted to.
     * This equation will measure the length of the text in a external canvas
     * object and determine what the longest label is and rotate until they fit.
     */
    getRotationAngle(ticks: any[]): number;
    /**
     * Gets the formatted label of the tick.
     */
    getLabelFormat(): (label: string) => string;
    /**
     * Gets the ticks given the dimensions and scales and returns
     * the text and position.
     */
    getTicks(): ProcessedTick[];
    render(): JSX.Element;
}
export {};
