import { FC, ReactElement } from 'react';
import { HierarchyCircularNode } from 'd3-hierarchy';
import { ChartTooltip, ChartTooltipProps } from '../common/Tooltip';
import { Gradient, GradientProps } from '../common/Gradient';
import { Mask, MaskProps } from '../common/Mask';
export interface BubbleProps {
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * The internal data object built by d3
     */
    data: HierarchyCircularNode<any>;
    /**
     * Fill for the bubble.
     */
    fill: string;
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Tooltip element.
     */
    tooltip?: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * Mask element for the arc.
     */
    mask: ReactElement<MaskProps, typeof Mask> | null;
    /**
     * Gradient shades for the arc.
     */
    gradient: ReactElement<GradientProps, typeof Gradient> | null;
    /**
     * Event for when the arc is clicked.
     */
    onClick?: (event: any) => void;
    /**
     * Event for when the arc has mouse enter.
     */
    onMouseEnter?: (event: any) => void;
    /**
     * Event for when the arc has mouse leave.
     */
    onMouseLeave?: (event: any) => void;
}
export declare const Bubble: FC<Partial<BubbleProps>>;
