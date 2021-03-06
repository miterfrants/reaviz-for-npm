import { ChartShallowDataShape } from '../common/data';
export declare type CalendarView = 'year' | 'month';
export declare const addWeeksToDate: (date: Date, weeks: number) => Date;
export declare const weekDays: string[];
export declare const buildDataScales: (rawData: ChartShallowDataShape[], view: CalendarView) => {
    data: any[];
    yDomain: any;
    xDomain: any;
    start: Date;
};
