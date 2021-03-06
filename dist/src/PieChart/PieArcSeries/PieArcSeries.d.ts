import { FC, ReactElement } from 'react';
import { ArcData } from '../PieChart';
import { PieArc, PieArcProps } from './PieArc';
import { PieArcLabel, PieArcLabelProps } from './PieArcLabel';
import { ColorSchemeType } from '../../common/color';
export interface PieArcSeriesProps {
    /**
     * Animated set by the `PieArc` components.
     */
    animated: boolean;
    /**
     * Outer radius set by the parent component.
     */
    outerRadius: number;
    /**
     * Inner radius set by the parent component.
     */
    innerRadius: number;
    /**
     * Pad Angle between adjacent arcs, see https://github.com/d3/d3-shape#arc_padAngle
     */
    padAngle: number;
    /**
     * Pad Radius between adjacent arcs, see https://github.com/d3/d3-shape#arc_padRadius
     */
    padRadius: number;
    /**
     * Corner Radius of the arcs, see https://github.com/d3/d3-shape#arc_cornerRadius
     */
    cornerRadius: number;
    /**
     * Data set by the parent component.
     */
    data: ArcData[];
    /**
     * Width of the arc
     */
    arcWidth: number;
    /**
     * Doughnut, render as a donut shape
     */
    doughnut: boolean;
    /**
     * Explode: OuterRadius will be adjusted by the data property
     */
    explode: boolean;
    /**
     * Display all labels shows labels even if there is little space
     */
    displayAllLabels: boolean;
    /**
     * Label component
     */
    label?: ReactElement<PieArcLabelProps, typeof PieArcLabel> | null;
    /**
     * Arc Component
     */
    arc: ReactElement<PieArcProps, typeof PieArc>;
    /**
     * Color scheme
     */
    colorScheme: ColorSchemeType;
    /**
     * Height set by the parent component
     */
    height: number;
    /**
     * Width set by the parent component
     */
    width: number;
}
export declare const PieArcSeries: FC<Partial<PieArcSeriesProps>>;
