import { FC } from 'react';
import { AreaChartProps } from '../AreaChart';
import { ChartShallowDataShape } from '../common/data';
export interface AreaSparklineChartProps extends AreaChartProps {
    data: ChartShallowDataShape[];
}
export declare const AreaSparklineChart: FC<Partial<AreaSparklineChartProps>>;
