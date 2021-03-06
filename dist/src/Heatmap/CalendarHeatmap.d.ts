import { FC } from 'react';
import { ChartShallowDataShape } from '../common/data';
import { HeatmapProps } from './Heatmap';
import { CalendarView } from './calendarUtils';
export interface CalendarHeatmapProps extends Omit<HeatmapProps, 'data'> {
    /**
     * Chart data shape.
     */
    data: ChartShallowDataShape[];
    /**
     * Height of the component.
     */
    height: number;
    /**
     * Width of the component.
     */
    width: number;
    /**
     * View of the calendar renderer.
     */
    view: CalendarView;
}
export declare const CalendarHeatmap: FC<Partial<CalendarHeatmapProps>>;
