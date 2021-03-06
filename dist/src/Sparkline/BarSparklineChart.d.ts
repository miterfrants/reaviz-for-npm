import { FC } from 'react';
import { BarChartProps } from '../BarChart';
import { ChartShallowDataShape } from '../common/data';
export interface BarSparklineChartProps extends BarChartProps {
    data: ChartShallowDataShape[];
}
export declare const BarSparklineChart: FC<Partial<BarSparklineChartProps>>;
