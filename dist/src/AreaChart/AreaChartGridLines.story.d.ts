import Reac from 'react';
declare const _default: {
    title: string;
    component: Reac.FC<Partial<import("./AreaChart").AreaChartProps>>;
    subcomponents: {
        AreaSeries: Reac.FC<Partial<import("./AreaSeries").AreaSeriesProps>>;
        Area: Reac.FC<Partial<import("./AreaSeries").AreaProps>>;
        Line: Reac.FC<Partial<import("./AreaSeries").LineProps>>;
        PointSeries: Reac.FC<Partial<import("./AreaSeries").PointSeriesProps>>;
        StackedAreaSeries: Reac.FC<Partial<import("./AreaSeries").AreaSeriesProps>>;
        StackedNormalizedAreaSeries: Reac.FC<Partial<import("./AreaSeries").AreaSeriesProps>>;
    };
};
export default _default;
export declare const AllAxes: () => JSX.Element;
export declare const XAxis: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
export declare const YAxis: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
