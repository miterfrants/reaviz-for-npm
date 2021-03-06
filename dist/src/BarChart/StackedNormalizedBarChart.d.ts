import { FC } from 'react';
import { ChartNestedDataShape } from '../common/data';
import { BarChartProps } from './BarChart';
interface StackedNormalizedBarChartProps extends BarChartProps {
    data: ChartNestedDataShape[];
}
export declare const StackedNormalizedBarChart: FC<Partial<StackedNormalizedBarChartProps>>;
export {};
