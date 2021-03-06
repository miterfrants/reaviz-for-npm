import { FC } from 'react';
export interface GridlineProps {
    /**
     * Height of the line set by the `GridlineSeries`.
     */
    height: number;
    /**
     * Width of the line set by the `GridlineSeries`.
     */
    width: number;
    /**
     * CSS Classname to apply.
     */
    className?: string;
    /**
     * Direction set by the `GridlineSeries`.
     */
    direction: 'all' | 'x' | 'y';
    /**
     * D3 Scale set by `GridlineSeries`.
     */
    scale: any;
    /**
     * SVG Stroke Width Property.
     */
    strokeWidth: number;
    /**
     * SVG Stroke Color Property.
     */
    strokeColor: string;
    /**
     * Data point for the position set by the `GridlineSeries`.
     */
    data: number;
    /**
     * Index set by the `GridlineSeries`.
     */
    index: number;
    /**
     * SVG Stroke Dash Array Property.
     */
    strokeDasharray: string;
}
export declare const Gridline: FC<Partial<GridlineProps>>;
