import { FC } from 'react';
import { BarChartProps } from '../BarChart';
import { ChartNestedDataShape } from '../common';
export interface SonarChartProps extends BarChartProps {
    data: ChartNestedDataShape[];
}
export declare const SonarChart: FC<Partial<SonarChartProps>>;
