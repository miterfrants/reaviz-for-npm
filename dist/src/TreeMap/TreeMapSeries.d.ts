import { FC, ReactElement } from 'react';
import { ColorSchemeType } from '../common/color';
import { TreeMapLabel, TreeMapLabelProps } from './TreeMapLabel';
import { TreeMapRect, TreeMapRectProps } from './TreeMapRect';
export interface TreeMapSeriesProps {
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * The internal data object built by d3
     */
    data: any[];
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Color scheme for the chart.
     */
    colorScheme: ColorSchemeType;
    /**
     * Rect element to be rendered.
     */
    rect?: ReactElement<TreeMapRectProps, typeof TreeMapRect>;
    /**
     * Label element to be rendered.
     */
    label?: ReactElement<TreeMapLabelProps, typeof TreeMapLabel>;
}
export declare const TreeMapSeries: FC<Partial<TreeMapSeriesProps>>;
