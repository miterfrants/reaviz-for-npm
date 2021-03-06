import { FC, ReactElement } from 'react';
import { ChartTooltip, ChartTooltipProps } from '../common/Tooltip';
export interface TreeMapRectProps {
    /**
     * The internal data object built by d3
     */
    data: any;
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * Fill for the rect.
     */
    fill: string;
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Cursor for the element.
     */
    cursor?: string;
    /**
     * Tooltip element.
     */
    tooltip?: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * Event for when the arc is clicked.
     */
    onClick?: (event: any, data: any) => void;
    /**
     * Event for when the arc has mouse enter.
     */
    onMouseEnter?: (event: any, data: any) => void;
    /**
     * Event for when the arc has mouse leave.
     */
    onMouseLeave?: (event: any, data: any) => void;
}
export declare const TreeMapRect: FC<Partial<TreeMapRectProps>>;
