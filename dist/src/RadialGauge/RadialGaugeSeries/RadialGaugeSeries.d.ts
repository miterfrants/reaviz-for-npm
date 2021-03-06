import { FC, ReactElement } from 'react';
import { ChartShallowDataShape } from '../../common/data';
import { ColorSchemeType } from '../../common/color';
import { RadialGaugeArc, RadialGaugeArcProps } from './RadialGaugeArc';
import { RadialGaugeLabel, RadialGaugeLabelProps } from './RadialGaugeLabel';
import { RadialGaugeValueLabel, RadialGaugeValueLabelProps } from './RadialGaugeValueLabel';
export interface RadialGaugeSeriesProps {
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
     * The "thickness" of the arcs
     */
    arcWidth?: number;
    /**
     * Width set by `RadialGauge` component.
     */
    width: number;
    /**
     * Height set by `RadialGauge` component.
     */
    height: number;
    /**
     * Padding between each gauge.
     */
    padding: number;
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
    label: ReactElement<RadialGaugeLabelProps, typeof RadialGaugeLabel> | null;
    /**
     * Value label component.
     */
    valueLabel: ReactElement<RadialGaugeValueLabelProps, typeof RadialGaugeValueLabel> | null;
    /**
     * Min width for a gauge. Only applicable in multi-series gauges.
     */
    minGaugeWidth: number;
}
export declare const RadialGaugeSeries: FC<Partial<RadialGaugeSeriesProps>>;
