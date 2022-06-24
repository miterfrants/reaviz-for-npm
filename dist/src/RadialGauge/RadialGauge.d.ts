import { FC, ReactElement } from 'react';
import { ChartProps } from '../common/containers';
import { ChartShallowDataShape } from '../common/data';
import { RadialGaugeSeries, RadialGaugeSeriesProps } from './RadialGaugeSeries';
export interface RadialGaugeProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape[];
    /**
     * Min value to scale on.
     */
    minValue?: number;
    /**
     * Max value to scale on.
     */
    maxValue?: number;
    /**
     * Start angle for the first value.
     */
    startAngle?: number;
    /**
     * End angle for the last value.
     */
    endAngle?: number;
    /**
     * Gauge series component to render.
     */
    series?: ReactElement<RadialGaugeSeriesProps, typeof RadialGaugeSeries>;
}
export declare const RadialGauge: FC<RadialGaugeProps>;
