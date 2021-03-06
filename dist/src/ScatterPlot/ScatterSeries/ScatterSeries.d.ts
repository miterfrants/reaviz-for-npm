import { ReactElement, FC } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { ScatterPoint, ScatterPointProps } from './ScatterPoint';
export interface ScatterSeriesProps {
    /**
     * Point that is rendered.
     */
    point: ReactElement<ScatterPointProps, typeof ScatterPoint>;
    /**
     * D3 scale for X Axis. Set internally by `ScatterPlot`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `ScatterPlot`.
     */
    yScale: any;
    /**
     * Parsed data shape. Set internally by `ScatterPlot`.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * Id set internally by `ScatterPlot`.
     */
    id: string;
    /**
     * Height of the chart. Set internally by `ScatterPlot`.
     */
    height: number;
    /**
     * Width of the chart. Set internally by `ScatterPlot`.
     */
    width: number;
    /**
     * Whether the chart has been zoomed or not. Set internally by `ScatterPlot`.
     */
    isZoomed: boolean;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Active element ids to highlight.
     */
    activeIds?: string[];
}
export declare const ScatterSeries: FC<Partial<ScatterSeriesProps>>;
