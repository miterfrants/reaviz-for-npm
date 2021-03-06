import { FC, ReactElement } from 'react';
import { HeatmapCell, HeatmapCellProps } from './HeatmapCell';
import { ColorSchemeType } from '../../common/color';
import { ChartInternalNestedDataShape } from '../../common/data';
export interface HeatmapSeriesProps {
    /**
     * Padding between cells.
     */
    padding: number;
    /**
     * Id set by `Heatmap`.
     */
    id: string;
    /**
     * Parsed data set by `Heatmap`.
     */
    data: ChartInternalNestedDataShape[];
    /**
     * D3 scale for X Axis. Set internally by `Heatmap`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `Heatmap`.
     */
    yScale: any;
    /**
     * Color scheme for the chart.
     */
    colorScheme: ColorSchemeType;
    /**
     * Color for the empty cell of the chart.
     */
    emptyColor: string;
    /**
     * Whether the chart is animated or not.
     */
    animated: boolean;
    /**
     * Cell component that will be rendered.
     */
    cell: ReactElement<HeatmapCellProps, typeof HeatmapCell>;
}
export declare const HeatmapSeries: FC<Partial<HeatmapSeriesProps>>;
