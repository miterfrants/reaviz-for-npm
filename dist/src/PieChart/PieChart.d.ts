import { FC, ReactElement } from 'react';
import { PieArcDatum } from 'd3-shape';
import { ChartProps } from '../common/containers';
import { ChartShallowDataShape } from '../common/data';
import { PieArcSeries, PieArcSeriesProps } from './PieArcSeries';
export declare type ArcData = PieArcDatum<ChartShallowDataShape>;
export interface PieChartProps extends ChartProps {
    /**
     * Data the chart will receive to render.
     */
    data?: ChartShallowDataShape[];
    /**
     * Whether the chart is disabled.
     */
    disabled?: boolean;
    /**
     * Whether to display labels even if their value has a small display radius.
     */
    displayAllLabels?: boolean;
    /**
     * The series component that renders the arc components.
     */
    series?: ReactElement<PieArcSeriesProps, typeof PieArcSeries>;
}
export declare const PieChart: FC<PieChartProps>;
