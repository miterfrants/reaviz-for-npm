import { FC, ReactElement } from 'react';
import { IVennLayout } from '@upsetjs/venn.js';
import { ChartTooltip, ChartTooltipProps } from '../common/Tooltip';
import { Mask, MaskProps } from '../common/Mask';
import { Gradient, GradientProps } from '../common/Gradient';
export interface VennArcProps {
    /**
     * Whether the shape is active or not.
     */
    active?: boolean | null;
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Fill color for the arc.
     */
    fill: string;
    /**
     * Stroke for the arc.
     */
    stroke?: string | ((data: IVennLayout<any>, index: number, isActive: boolean | null, isHovered: boolean | null) => string);
    /**
     * The internal data object built by venn.js
     */
    data: IVennLayout<any>;
    /**
     * Whether the chart is disabled.
     */
    disabled?: boolean;
    /**
     * Stroke on the arc.
     */
    strokeWidth?: number;
    /**
     * Initial style of arc.
     */
    initialStyle?: any;
    /**
     * Active style of arc.
     */
    activeStyle?: any;
    /**
     * Inactive style of arc.
     */
    inactiveStyle?: any;
    /**
     * CSS Styles for the arc.
     */
    style?: any;
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
    onClick: (event: any) => void;
    /**
     * Event for when the arc has mouse enter.
     */
    onMouseEnter: (event: any) => void;
    /**
     * Event for when the arc has mouse leave.
     */
    onMouseLeave: (event: any) => void;
}
export declare const VennArc: FC<Partial<VennArcProps>>;
