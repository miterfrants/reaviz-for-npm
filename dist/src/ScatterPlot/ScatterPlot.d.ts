import { FC, ReactElement } from 'react';
import { ChartShallowDataShape } from '../common/data';
import { LinearAxisProps, LinearAxis } from '../common/Axis';
import { ScatterSeries, ScatterSeriesProps } from './ScatterSeries';
import { GridlineSeries, GridlineSeriesProps } from '../common/Gridline';
import { ChartZoomPanProps, ChartZoomPan } from '../common/ZoomPan';
import { ChartBrushProps, ChartBrush } from '../common/Brush';
import { ChartProps } from '../common/containers/ChartContainer';
interface ScatterPlotProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape[];
    /**
     * The series component that renders the scatter components.
     */
    series: ReactElement<ScatterSeriesProps, typeof ScatterSeries>;
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
     * The chart's zoom pan component.
     */
    zoomPan: ReactElement<ChartZoomPanProps, typeof ChartZoomPan> | null;
    /**
     * Any secondary axis components. Useful for multi-axis charts.
     */
    secondaryAxis?: ReactElement<LinearAxisProps, typeof LinearAxis>[];
}
export declare const ScatterPlot: FC<Partial<ScatterPlotProps>>;
export {};
