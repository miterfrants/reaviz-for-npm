import { ReactElement, FC } from 'react';
import { ChartProps } from '../common/containers/ChartContainer';
import { ChartNestedDataShape } from '../common/data';
import { LinearAxisProps, LinearAxis } from '../common/Axis';
import { HeatmapSeries, HeatmapSeriesProps } from './HeatmapSeries';
export interface HeatmapProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartNestedDataShape[];
    /**
     * The series component that renders the cell components.
     */
    series: ReactElement<HeatmapSeriesProps, typeof HeatmapSeries>;
    /**
     * The linear axis component for the Y Axis of the chart.
     */
    yAxis: ReactElement<LinearAxisProps, typeof LinearAxis>;
    /**
     * The linear axis component for the X Axis of the chart.
     */
    xAxis: ReactElement<LinearAxisProps, typeof LinearAxis>;
    /**
     * Any secondary axis components. Useful for multi-axis charts.
     */
    secondaryAxis?: ReactElement<LinearAxisProps, typeof LinearAxis>[];
}
export declare const Heatmap: FC<Partial<HeatmapProps>>;
