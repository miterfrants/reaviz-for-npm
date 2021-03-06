import { ReactElement, FC } from 'react';
import { BarSeriesProps } from '../BarChart';
import { LinearGaugeBar, LinearGaugeBarProps } from './LinearGaugeBar';
import { LinearGaugeOuterBar, LinearGaugeOuterBarProps } from './LinearGaugeOuterBar';
export interface LinearGaugeSeriesProps extends Omit<BarSeriesProps, 'bar'> {
    /**
     * Height of the chart. Set by `LinearGauge` component.
     */
    height: number;
    /**
     * Width of the chart. Set by `LinearGauge` component.
     */
    width: number;
    /**
     * Whether its a multi-series or not. Set by `LinearGauge` component.
     */
    isMultiSeries: boolean;
    /**
     * Bar element. Only applicable for single series.
     */
    bar: ReactElement<LinearGaugeBarProps, typeof LinearGaugeBar>;
    /**
     * Outer bar element. Only applicable for single series.
     */
    outerBar: ReactElement<LinearGaugeOuterBarProps, typeof LinearGaugeOuterBar>;
}
export declare const LinearGaugeSeries: FC<Partial<LinearGaugeSeriesProps>>;
