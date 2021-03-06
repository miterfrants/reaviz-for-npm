import { FC } from 'react';
import { AreaChartProps } from './AreaChart';
import { ChartNestedDataShape } from '../common/data';
export interface StackedAreaChartProps extends AreaChartProps {
    data: ChartNestedDataShape[];
}
export declare const StackedAreaChart: FC<Partial<StackedAreaChartProps>>;
