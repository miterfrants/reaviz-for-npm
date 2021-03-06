import { FC, ReactElement } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { RadialScatterPoint, RadialScatterPointProps } from './RadialScatterPoint';
export interface RadialScatterSeriesProps {
    /**
     * Point that is rendered.
     */
    point: ReactElement<RadialScatterPointProps, typeof RadialScatterPoint>;
    /**
     * D3 scale for X Axis. Set internally by `RadialScatterPlot`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `RadialScatterPlot`.
     */
    yScale: any;
    /**
     * Parsed data shape. Set internally by `RadialScatterPlot`.
     */
    data: ChartInternalShallowDataShape[];
    /**
     * Id set internally by `RadialScatterPlot`.
     */
    id: string;
    /**
     * Whether to animate the enter/update/exit.
     */
    animated: boolean;
    /**
     * Active element ids to highlight.
     */
    activeIds?: string[];
}
export declare const RadialScatterSeries: FC<Partial<RadialScatterSeriesProps>>;
