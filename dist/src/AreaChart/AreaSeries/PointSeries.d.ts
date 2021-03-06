import { FC, ReactElement } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { ScatterPoint, ScatterPointProps } from '../../ScatterPlot';
export interface PointSeriesProps {
    animated: boolean;
    color: any;
    activeValues?: any;
    data: ChartInternalShallowDataShape[];
    yScale: any;
    xScale: any;
    id: string;
    height: number;
    width: number;
    show: boolean | 'hover' | 'first' | 'last';
    point: ReactElement<ScatterPointProps, typeof ScatterPoint>;
    index: number;
}
export declare const PointSeries: FC<Partial<PointSeriesProps>>;
