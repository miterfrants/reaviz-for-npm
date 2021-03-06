import React, { ReactElement, FC } from 'react';
import { ArcData } from '../PieChart';
import { ChartTooltip, ChartTooltipProps } from '../../common/Tooltip';
export interface PieArcMouseEvent {
    value: ArcData['data'];
    nativeEvent: React.MouseEvent<SVGPathElement>;
}
export interface PieArcProps {
    /**
     * The arc generator function returning an arc path
     * @param data
     */
    arc?: (data: ArcData) => string | null;
    /**
     * Data is the datum passed to the arc generator function
     */
    data?: ArcData;
    /**
     * Color
     */
    color?: string;
    /**
     * Animate
     */
    animated?: boolean;
    /**
     * Tooltip component
     */
    tooltip?: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * The cursor type used when hovering
     */
    cursor?: string;
    /**
     * Disable the arc
     */
    disabled?: boolean;
    /**
     * OnClick event handler
     * @param e Click event
     */
    onClick?: (e: PieArcMouseEvent) => void;
    /**
     * MouseEnter event handler
     * @param e MouseEnter event
     */
    onMouseEnter?: (e: PieArcMouseEvent) => void;
    /**
     * MouseLeave event handler
     * @param e MouseLeave event
     */
    onMouseLeave?: (e: PieArcMouseEvent) => void;
}
export declare const PieArc: FC<PieArcProps>;
