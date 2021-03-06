import { FC, ReactElement } from 'react';
import { ChartShallowDataShape } from '../../common/data';
import { ChartTooltip, ChartTooltipProps } from '../../common/Tooltip';
export interface RadialGaugeArcProps {
    /**
     * Data set by the `RadialGaugeSeries` components.
     */
    data?: ChartShallowDataShape;
    /**
     * Start angle set by the `RadialGaugeSeries` components.
     */
    startAngle: number;
    /**
     * End angle set by the `RadialGaugeSeries` components.
     */
    endAngle: number;
    /**
     * Inner radius set by the `RadialGaugeSeries` components.
     */
    innerRadius: number;
    /**
     * Outer radius set by the `RadialGaugeSeries` components.
     */
    outerRadius: number;
    /**
     * Color set by the `RadialGaugeSeries` components.
     */
    color: any;
    /**
     * Corner Radius of the arcs, see https://github.com/d3/d3-shape#arc_cornerRadius
     */
    cornerRadius?: number;
    /**
     * Pad Angle between adjacent arcs, see https://github.com/d3/d3-shape#arc_padAngle
     */
    padAngle?: number;
    /**
     * Pad Radius between adjacent arcs, see https://github.com/d3/d3-shape#arc_padRadius
     */
    padRadius?: number;
    /**
     * Animation set by the `RadialGaugeSeries` component.
     */
    animated: boolean;
    /**
     * Disable the interactions.
     */
    disabled: boolean;
    /**
     * Fill the arc.
     */
    fill?: string;
    /**
     * Tooltip component.
     */
    tooltip: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
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
export declare const RadialGaugeArc: FC<Partial<RadialGaugeArcProps>>;
