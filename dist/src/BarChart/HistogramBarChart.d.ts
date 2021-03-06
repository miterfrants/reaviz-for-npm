import { FC } from 'react';
import { ChartShallowDataShape } from '../common/data';
import { BarChartProps } from './BarChart';
export interface HistogramBarChartProps extends BarChartProps {
    data: ChartShallowDataShape[];
}
export declare const HistogramBarChart: FC<Partial<HistogramBarChartProps>>;
