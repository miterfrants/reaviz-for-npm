import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<Partial<import("./AreaChart").AreaChartProps>>;
    subcomponents: {
        AreaSeries: React.FC<Partial<import("./AreaSeries").AreaSeriesProps>>;
        Area: React.FC<Partial<import("./AreaSeries").AreaProps>>;
        Line: React.FC<Partial<import("./AreaSeries").LineProps>>;
        PointSeries: React.FC<Partial<import("./AreaSeries").PointSeriesProps>>;
        StackedAreaSeries: React.FC<Partial<import("./AreaSeries").AreaSeriesProps>>;
        StackedNormalizedAreaSeries: React.FC<Partial<import("./AreaSeries").AreaSeriesProps>>;
    };
};
export default _default;
export declare const TopBottomAxis: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
export declare const LeftRightAxis: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
