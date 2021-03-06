import { FC } from 'react';
export interface GridStripeProps {
    /**
     * Position set by the `GridlineSeries`.
     */
    position: 'horizontal' | 'vertical';
    /**
     * CSS Classname to apply.
     */
    className?: string;
    /**
     * Stripe fill color.
     */
    fill: string;
    /**
     * Height of the line set by the `GridlineSeries`.
     */
    height: number;
    /**
     * Width of the line set by the `GridlineSeries`.
     */
    width: number;
    /**
     * Direction set by the `GridlineSeries`.
     */
    direction: 'all' | 'x' | 'y';
    /**
     * D3 Scale set by `GridlineSeries`.
     */
    scale: any;
    /**
     * Data point for the position set by the `GridlineSeries`.
     */
    data: number;
    /**
     * Index set by the `GridlineSeries`.
     */
    index: number;
}
export declare const GridStripe: FC<Partial<GridStripeProps>>;
