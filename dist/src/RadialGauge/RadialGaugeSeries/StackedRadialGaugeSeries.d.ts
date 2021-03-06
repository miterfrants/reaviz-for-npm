import { FC, ReactElement } from 'react';
import { ChartShallowDataShape } from '../../common/data';
import { ColorSchemeType } from '../../common/color';
import { RadialGaugeArc, RadialGaugeArcProps } from './RadialGaugeArc';
import { StackedRadialGaugeValueLabel, StackedRadialGaugeValueLabelProps } from './StackedRadialGaugeValueLabel';
export interface StackedRadialGaugeSeriesProps {
    /**
     * Data to render set by `RadialGauge` component.
     */
    data: ChartShallowDataShape[];
    /**
     * D3 scale function set by `RadialGauge` component.
     */
    scale: any;
    /**
     * Start angle set by `RadialGauge` component.
     */
    startAngle: number;
    /**
     * Start angle set by `RadialGauge` component.
     */
    endAngle: number;
    /**
     * Width set by `RadialGauge` component.
     */
    width: number;
    /**
     * Height set by `RadialGauge` component.
     */
    height: number;
    /**
     * Color scheme to apply.
     */
    colorScheme: ColorSchemeType;
    /**
     * Arc component.
     */
    innerArc: ReactElement<RadialGaugeArcProps, typeof RadialGaugeArc>;
    /**
     * Outer arc component. This is the 'fill' element.
     */
    outerArc: ReactElement<RadialGaugeArcProps, typeof RadialGaugeArc> | null;
    /**
     * Label component.
     */
    label: ReactElement<StackedRadialGaugeValueLabelProps, typeof StackedRadialGaugeValueLabel> | null;
    /**
     * A factor from 0 to 1 determining how much of the Gauge should be filled with arcs
     */
    fillFactor: number;
    /**
     * Padding between the stacked arcs, following d3 bandwidth innerPadding
     */
    arcPadding: number;
}
export declare const StackedRadialGaugeSeries: FC<Partial<StackedRadialGaugeSeriesProps>>;
