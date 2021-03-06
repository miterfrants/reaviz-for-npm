import { FC, ReactElement } from 'react';
import { ChartProps, ChartShallowDataShape } from '../common';
import { BubbleSeries, BubbleSeriesProps } from './BubbleSeries';
export interface BubbleChartProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data: ChartShallowDataShape[];
    /**
     * The series component that renders the arc components.
     */
    series?: ReactElement<BubbleSeriesProps, typeof BubbleSeries>;
}
export declare const BubbleChart: FC<Partial<BubbleChartProps>>;
