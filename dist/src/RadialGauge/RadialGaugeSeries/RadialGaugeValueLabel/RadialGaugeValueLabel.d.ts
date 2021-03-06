import { FC } from 'react';
import { ChartShallowDataShape } from '../../../common/data';
export interface RadialGaugeValueLabelProps {
    /**
     * Data set by the `RadialGaugeSeries` component.
     */
    data: ChartShallowDataShape;
    /**
     * Classname to apply to the value label.
     */
    className?: any;
}
export declare const RadialGaugeValueLabel: FC<Partial<RadialGaugeValueLabelProps>>;
