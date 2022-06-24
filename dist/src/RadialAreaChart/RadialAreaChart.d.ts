import { ReactElement, FC } from 'react';
import { ChartShallowDataShape } from '../common/data';
import { ChartProps } from '../common/containers';
import { RadialAreaSeries, RadialAreaSeriesProps } from './RadialAreaSeries';
import { RadialAxis, RadialAxisProps } from '../common/Axis/RadialAxis';
export interface RadialAreaChartProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape[];
    /**
     * The series component that renders the area components.
     */
    series: ReactElement<RadialAreaSeriesProps, typeof RadialAreaSeries>;
    /**
     * The radial axis component for the chart.
     */
    innerRadius: number;
    /**
     * The inner radius for the chart center.
     */
    axis: ReactElement<RadialAxisProps, typeof RadialAxis> | null;
}
export declare const RadialAreaChart: FC<Partial<RadialAreaChartProps>>;
