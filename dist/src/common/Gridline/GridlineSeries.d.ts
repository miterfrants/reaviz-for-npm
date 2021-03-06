import { ReactElement, FC } from 'react';
import { Gridline, GridlineProps } from './Gridline';
import { LinearAxisProps } from '../Axis';
import { GridStripeProps, GridStripe } from './GridStripe';
declare type GridLineElement = ReactElement<GridlineProps, typeof Gridline>;
declare type GridStripeElement = ReactElement<GridStripeProps, typeof GridStripe>;
export interface GridlineSeriesProps {
    /**
     * D3 scale for Y Axis.
     */
    yScale: any;
    /**
     * D3 scale for X Axis.
     */
    xScale: any;
    /**
     * The linear axis component for the Y Axis of the chart.
     */
    yAxis: LinearAxisProps;
    /**
     * The linear axis component for the X Axis of the chart.
     */
    xAxis: LinearAxisProps;
    /**
     * Height of the chart.
     */
    height: number;
    /**
     * Width of the chart.
     */
    width: number;
    /**
     * Gridline that is rendered.
     */
    line: GridLineElement | null;
    /**
     * GridStripe that is rendered.
     */
    stripe: GridStripeElement | null;
}
export declare const GridlineSeries: FC<Partial<GridlineSeriesProps>>;
export {};
