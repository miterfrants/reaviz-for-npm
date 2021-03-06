import { FC } from 'react';
import { TooltipProps } from 'realayers';
export interface ChartTooltipProps extends TooltipProps {
    /**
     * Content for the tooltip.
     */
    content: any;
    /**
     * Tooltip data value.
     */
    value?: any;
    /**
     * Color scheme to apply.
     */
    color?: any;
    /**
     * Complete dataset.
     */
    data: any;
    /**
     * Whether the tooltip should move with the cursor or not.
     */
    followCursor?: boolean;
}
export declare const ChartTooltip: FC<Partial<ChartTooltipProps>>;
