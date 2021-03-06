import { ReactElement, FC } from 'react';
import { Gradient, GradientProps } from '../../common/Gradient';
import { ChartInternalShallowDataShape, Direction } from '../../common/data';
import { RangeLinesProps, RangeLines } from './RangeLines';
import { Mask, MaskProps } from '../../common/Mask';
import { PropFunctionTypes } from '../../common/utils/functions';
import { BarLabelProps, BarLabel } from './BarLabel';
import { GuideBarProps, GuideBar } from './GuideBar';
import { ChartTooltipProps, ChartTooltip } from '../../common/Tooltip';
export declare type BarType = 'standard' | 'grouped' | 'stacked' | 'stackedNormalized' | 'stackedDiverging' | 'marimekko' | 'waterfall';
export declare type BarProps = {
    /**
     * Whether the bar is active or not.
     */
    active: boolean;
    /**
     * Chroma brightness factor to brighten the active bar. See
     * https://gka.github.io/chroma.js/#color-brighten for more info.
     */
    activeBrightness?: number;
    /**
     * D3 scale for X Axis. Set internally by `BarChart`.
     */
    xScale: any;
    /**
     * D3 scale for Y Axis. Set internally by `BarChart`.
     */
    yScale: any;
    /**
     * D3 scale for X Multi-Group Axis. Set internally by `BarChart`.
     */
    xScale1: any;
    /**
     * Parsed data shape. Set internally by `BarChart`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * Id set internally by `BarChart`.
     */
    id: string;
    /**
     * Gradient shades for the bar.
     */
    gradient: ReactElement<GradientProps, typeof Gradient> | null;
    /**
     * SVG rx attribute for the bar.
     */
    rx: number;
    /**
     * SVG ry attribute for the bar.
     */
    ry: number;
    /**
     * Width of the bar. Set internally by `BarSeries`.
     */
    width: number;
    /**
     * Padding for the bar groups.
     */
    padding: number;
    /**
     * Total number of bars used for animation. Set internally by `BarSeries`.
     */
    barCount: number;
    /**
     * Color callback for the bar.
     */
    color: any;
    /**
     * Cursor for the bar element.
     */
    cursor: string;
    /**
     * Index of the bar. Set internally by `BarSeries`.
     */
    barIndex: number;
    /**
     * Index of the group. Set internally by `BarSeries`.
     */
    groupIndex?: number;
    /**
     * Whether to animate the enter/update/exit. Set internally by `BarSeries`.
     */
    animated: boolean;
    /**
     * Whether this is categorical chart or not. Set internally by `BarSeries`.
     */
    isCategorical: boolean;
    /**
     * Rangelines element. for the bar.
     */
    rangeLines: ReactElement<RangeLinesProps, typeof RangeLines> | null;
    /**
     * Mask element for the bar.
     */
    mask: ReactElement<MaskProps, typeof Mask> | null;
    /**
     * Tooltip element.
     */
    tooltip: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * Direction of the chart. Set internally by `BarSeries`.
     */
    layout: Direction;
    /**
     * Type of bar chart. Set internally by `BarSeries`.
     */
    type: BarType;
    /**
     * Label element.
     */
    label: ReactElement<BarLabelProps, typeof BarLabel> | null;
    /**
     * Guide bar component.
     */
    guide: ReactElement<GuideBarProps, typeof GuideBar> | null;
    /**
     * Force a min height on the bar.
     */
    minHeight?: number;
    /**
     * Event for when the bar is clicked.
     */
    onClick: (event: any) => void;
    /**
     * Event for when the bar has mouse enter.
     */
    onMouseEnter: (event: any) => void;
    /**
     * Event for when the bar has mouse leave.
     */
    onMouseLeave: (event: any) => void;
    /**
     * Event for when a bar has mouse move.
     */
    onMouseMove: (event: any) => void;
} & PropFunctionTypes;
export declare const Bar: FC<Partial<BarProps>>;
