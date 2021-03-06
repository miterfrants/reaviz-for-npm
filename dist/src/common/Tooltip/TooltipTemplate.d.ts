import { FC } from 'react';
import { ChartInternalDataTypes } from '../data';
interface SingleTooltipValue {
    key?: ChartInternalDataTypes;
    value?: ChartInternalDataTypes;
    x: ChartInternalDataTypes;
    y: ChartInternalDataTypes;
}
interface MultipleTooltipValues {
    x: ChartInternalDataTypes;
    data: SingleTooltipValue[];
}
interface TooltipTemplateProps {
    /**
     * Tooltip data value.
     */
    value?: SingleTooltipValue | MultipleTooltipValues;
    /**
     * Color scheme to apply.
     */
    color?: any;
    /**
     * Additional CSS classes to apply.
     */
    className?: any;
}
export declare const TooltipTemplate: FC<TooltipTemplateProps>;
export {};
