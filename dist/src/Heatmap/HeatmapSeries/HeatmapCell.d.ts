import { FC, ReactElement } from 'react';
import { ChartTooltip, ChartTooltipProps } from '../../common/Tooltip';
import { PropFunctionTypes } from '../../common/utils/functions';
import { ChartInternalShallowDataShape } from '../../common/data';
export declare type HeatmapCellProps = {
    /**
     * X Position set by `HeatmapSeries`.
     */
    x: number;
    /**
     * Y Position set by `HeatmapSeries`.
     */
    y: number;
    /**
     * rx SVG Attribute.
     */
    rx: number;
    /**
     * ry SVG Attribute.
     */
    ry: number;
    /**
     * Height of cell set by `HeatmapSeries`.
     */
    height: number;
    /**
     * Width of cell set by `HeatmapSeries`.
     */
    width: number;
    /**
     * Total count of cells set by `HeatmapSeries`.
     */
    cellCount: number;
    /**
     * Tooltip component.
     */
    tooltip: ReactElement<ChartTooltipProps, typeof ChartTooltip> | null;
    /**
     * Fill color set by `HeatmapSeries`.
     */
    fill: string;
    /**
     * Data object set by `Heatmap`.
     */
    data: ChartInternalShallowDataShape;
    /**
     * Whether cell is animated or not set by `HeatmapSeries`.
     */
    animated: boolean;
    /**
     * Cell index set by `HeatmapSeries`.
     */
    cellIndex: number;
    /**
     * Cursor style attribute.
     */
    cursor: string;
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
} & PropFunctionTypes;
export declare const HeatmapCell: FC<Partial<HeatmapCellProps>>;
