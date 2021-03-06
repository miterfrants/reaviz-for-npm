import { ReactElement, FC } from 'react';
import { LinearAxisProps, LinearAxis } from '../common/Axis';
import { BarSeries, BarSeriesProps } from './BarSeries';
import { ChartDataShape } from '../common/data';
import { GridlineSeries, GridlineSeriesProps } from '../common/Gridline';
import { ChartBrushProps, ChartBrush } from '../common/Brush';
import { ChartProps } from '../common/containers/ChartContainer';
export interface BarChartProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartDataShape[];
    /**
     * The series component that renders the bar components.
     */
    series: ReactElement<BarSeriesProps, typeof BarSeries>;
    /**
     * The linear axis component for the Y Axis of the chart.
     */
    yAxis: ReactElement<LinearAxisProps, typeof LinearAxis>;
    /**
     * The linear axis component for the X Axis of the chart.
     */
    xAxis: ReactElement<LinearAxisProps, typeof LinearAxis>;
    /**
     * The chart's background gridlines component.
     */
    gridlines: ReactElement<GridlineSeriesProps, typeof GridlineSeries> | null;
    /**
     * The chart's brush component.
     */
    brush: ReactElement<ChartBrushProps, typeof ChartBrush> | null;
    /**
     * Any secondary axis components. Useful for multi-axis charts.
     */
    secondaryAxis?: ReactElement<LinearAxisProps, typeof LinearAxis>[];
}
export declare const BarChart: FC<Partial<BarChartProps>>;
