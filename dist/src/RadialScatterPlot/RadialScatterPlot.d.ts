import { FC, ReactElement } from 'react';
import { ChartShallowDataShape } from '../common/data';
import { RadialScatterSeries, RadialScatterSeriesProps } from './RadialScatterSeries';
import { ChartProps } from '../common/containers';
import { RadialAxisProps, RadialAxis } from '../common/Axis/RadialAxis';
export interface RadialScatterPlotProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape[];
    /**
     * The series component that renders the scatter components.
     */
    series: ReactElement<RadialScatterSeriesProps, typeof RadialScatterSeries>;
    /**
     * The radial axis component for the chart.
     */
    axis: ReactElement<RadialAxisProps, typeof RadialAxis> | null;
    /**
     * The inner radius for the chart center.
     */
    innerRadius: number;
}
export declare const RadialScatterPlot: FC<Partial<RadialScatterPlotProps>>;
