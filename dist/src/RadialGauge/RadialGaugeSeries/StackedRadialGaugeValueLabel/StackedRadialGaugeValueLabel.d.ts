import { FC } from 'react';
export interface StackedRadialGaugeValueLabelProps {
    /**
     * A label shown at the center
     */
    label: string;
    /**
     * A class name to apply
     */
    className?: string;
    /**
     * A y offset to apply to the label
     */
    yOffset?: number;
}
export declare const StackedRadialGaugeValueLabel: FC<Partial<StackedRadialGaugeValueLabelProps>>;
