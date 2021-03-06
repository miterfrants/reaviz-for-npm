import { FC } from 'react';
import { LineChartProps } from '../LineChart';
import { ChartShallowDataShape } from '../common/data';
export interface SparklineChartProps extends LineChartProps {
    data: ChartShallowDataShape[];
}
export declare const SparklineChart: FC<Partial<SparklineChartProps>>;
