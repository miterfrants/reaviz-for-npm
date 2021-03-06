import { ReactElement, FC } from 'react';
import { AreaSeries, AreaSeriesProps } from './AreaSeries';
import { LinearAxisProps, LinearAxis } from '../common/Axis/LinearAxis';
import { GridlineSeries, GridlineSeriesProps } from '../common/Gridline';
import { ChartDataShape } from '../common/data';
import { ChartBrushProps, ChartBrush } from '../common/Brush';
import { ChartZoomPanProps, ChartZoomPan } from '../common/ZoomPan';
import { ChartProps } from '../common/containers/ChartContainer';
export interface AreaChartProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartDataShape[];
    /**
     * The series component that renders the area/line/circles components.
     */
    series: ReactElement<AreaSeriesProps, typeof AreaSeries>;
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
export declare const AreaChart: FC<Partial<AreaChartProps>>;
