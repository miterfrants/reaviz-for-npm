import { FC, ReactElement } from 'react';
import { ChartShallowDataShape } from '../common/data';
import { RadialBarSeries, RadialBarSeriesProps } from './RadialBarSeries';
import { ChartProps } from '../common/containers';
import { RadialAxis, RadialAxisProps } from '../common/Axis/RadialAxis';
export interface RadialBarChartProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape[];
    /**
     * The series component that renders the bar components.
     */
    series: ReactElement<RadialBarSeriesProps, typeof RadialBarSeries>;
    /**
     * The radial axis component for the chart.
     */
    axis: ReactElement<RadialAxisProps, typeof RadialAxis> | null;
    /**
     * The inner radius for the chart center.
     */
    innerRadius: number;
}
export declare const RadialBarChart: FC<Partial<RadialBarChartProps>>;
