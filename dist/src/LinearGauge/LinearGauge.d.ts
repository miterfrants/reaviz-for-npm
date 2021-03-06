import { FC, ReactElement } from 'react';
import { ChartProps } from '../common/containers';
import { ChartShallowDataShape } from '../common/data';
import { LinearGaugeSeries, LinearGaugeSeriesProps } from './LinearGaugeSeries';
export interface LinearGaugeProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape | ChartShallowDataShape[];
    /**
     * The series component that renders the bar components.
     */
    series: ReactElement<LinearGaugeSeriesProps, typeof LinearGaugeSeries>;
    /**
     * Min value to scale on. Only applicable for single-series.
     */
    minValue: number;
    /**
     * Max value to scale on. Only applicable for single-series.
     */
    maxValue: number;
}
export declare const LinearGauge: FC<Partial<LinearGaugeProps>>;
