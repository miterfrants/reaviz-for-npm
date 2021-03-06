import { FC } from 'react';
import { AreaChartProps } from './AreaChart';
import { ChartNestedDataShape } from '../common/data';
export interface StackedNormalizedAreaChartProps extends AreaChartProps {
    data: ChartNestedDataShape[];
}
export declare const StackedNormalizedAreaChart: FC<Partial<StackedNormalizedAreaChartProps>>;
