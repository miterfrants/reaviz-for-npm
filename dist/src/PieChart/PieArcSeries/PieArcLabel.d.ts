import React, { FC } from 'react';
import { ArcData } from '../PieChart';
export interface PieArcLabelProps {
    /**
     * Data set by the parent component
     */
    data: ArcData;
    /**
     * A function returning the centroid of the corresponding `PieArc`
     * @param d PieArcDatum
     */
    centroid: (d: ArcData) => [number, number];
    /**
     * A Formatting function for the label value
     * @param v The label value
     */
    format?: (v: any & ArcData['data'] & {
        textAnchor: 'start' | 'end';
    }) => React.ReactNode;
    /**
     * FontFill color
     */
    fontFill: string;
    /**
     * FontSize
     */
    fontSize: number;
    /**
     * FontFamily
     */
    fontFamily: string;
    /**
     * Line stroke of the label connector
     */
    lineStroke: string;
    /**
     * Outer radius of the corresponding `PieArc`
     */
    outerRadius: number;
    /**
     * y Padding of the label
     */
    padding: string;
    /**
     * The label position set by the parent component
     */
    position: [number, number];
    /**
     * Width of the label
     */
    width?: number;
    /**
     * Height of the label
     */
    height?: number;
}
export declare const PieArcLabel: FC<Partial<PieArcLabelProps>>;
