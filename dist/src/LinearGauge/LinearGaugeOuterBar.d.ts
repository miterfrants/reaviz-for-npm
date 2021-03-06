import { FC } from 'react';
export interface LinearGaugeOuterBarProps extends SVGRect {
    /**
     * Height of the chart. Set by `LinearGauge` component.
     */
    height: number;
    /**
     * Width of the chart. Set by `LinearGauge` component.
     */
    width: number;
    /**
     * Fill for the bar element.
     */
    fill: string;
}
export declare const LinearGaugeOuterBar: FC<Partial<LinearGaugeOuterBarProps>>;
