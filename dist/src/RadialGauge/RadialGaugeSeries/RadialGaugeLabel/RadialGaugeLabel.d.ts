import { FC } from 'react';
import { ChartShallowDataShape } from '../../../common/data';
export interface RadialGaugeLabelProps {
    /**
     * Data set by the `RadialGaugeSeries` component.
     */
    data: ChartShallowDataShape;
    /**
     * Offset set by the `RadialGaugeSeries` component.
     */
    offset: number;
    /**
     * Classname to apply to the label.
     */
    className?: any;
    /**
     * Label click event.
     */
    onClick: (event: {
        data: any;
        nativeEvent: any;
    }) => void;
}
export declare const RadialGaugeLabel: FC<Partial<RadialGaugeLabelProps>>;
