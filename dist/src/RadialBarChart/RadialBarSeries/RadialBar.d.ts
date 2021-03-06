import { FC, ReactElement } from 'react';
import { ChartInternalShallowDataShape } from '../../common/data';
import { RadialGuideBar, RadialGuideBarProps } from './RadialGuideBar';
export interface RadialBarProps {
    /**
     * Parsed data shape. Set internally by `RadialBarChart`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * The inner radius for the chart center.
     */
    innerRadius: number;
    /**
     * Index of the element in the series. Set internally by `RadialBarSeries`.
     */
    index: number;
    /**
     * Whether the element is active or not. Set internally by `RadialBarSeries`.
     */
    animated: boolean;
    /**
     * D3 scale for X Axis. Set internally by `RadialBarChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `RadialBarChart`.
     */
    yScale: any;
    /**
     * Color of the bar.
     */
    color: any;
    /**
     * Whether to use gradient or not.
     */
    gradient: boolean;
    /**
     * Id set internally by `RadialBarSeries`.
     */
    id: string;
    /**
     * Total number of bars used for animation. Set internally by `RadialBarSeries`.
     */
    barCount: number;
    /**
     * CSS classes to apply.
     */
    className?: any;
    /**
     * Whether the bar is curved or not.
     */
    curved: boolean;
    /**
     * Guide bar component.
     */
    guide: ReactElement<RadialGuideBarProps, typeof RadialGuideBar> | null;
    /**
     * Active caused by hover.
     */
    active: boolean;
    /**
     * Event for when a symbol is clicked.
     */
    onClick: (event: any) => void;
    /**
     * Event for when the symbol has mouse enter.
     */
    onMouseEnter: (event: any) => void;
    /**
     * Event for when the symbol has mouse leave.
     */
    onMouseLeave: (event: any) => void;
}
export declare const RadialBar: FC<Partial<RadialBarProps>>;
