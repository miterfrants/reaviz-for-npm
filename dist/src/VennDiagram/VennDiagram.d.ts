import { FC, ReactElement } from 'react';
import { ChartProps } from '../common/containers';
import { VennSeries, VennSeriesProps } from './VennSeries';
export interface VennDiagramData {
    /**
     * List of Keys for the data.
     */
    key: string[];
    /**
     * Size of the data keys.
     */
    data: number;
}
export interface VennDiagramProps extends ChartProps {
    /**
     * Type of the chart.
     */
    type?: 'venn' | 'euler' | 'starEuler';
    /**
     * Data the chart will receive to render.
     */
    data: VennDiagramData[];
    /**
     * The series component that renders the arc and label components.
     */
    series?: ReactElement<VennSeriesProps, typeof VennSeries> | null;
    /**
     * Whether the chart is disabled.
     */
    disabled?: boolean;
}
export declare const VennDiagram: FC<VennDiagramProps>;
