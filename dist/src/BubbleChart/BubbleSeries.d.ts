import { FC, ReactElement } from 'react';
import { HierarchyCircularNode } from 'd3-hierarchy';
import { ColorSchemeType } from '../common/color';
import { Bubble, BubbleProps } from './Bubble';
import { BubbleLabel, BubbleLabelProps } from './BubbleLabel';
export interface BubbleSeriesProps {
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * The internal data object built by d3
     */
    data: HierarchyCircularNode<any>[];
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Color scheme for the chart.
     */
    colorScheme: ColorSchemeType;
    /**
     * Bubble element.
     */
    bubble?: ReactElement<BubbleProps, typeof Bubble>;
    /**
     * Label element.
     */
    label?: ReactElement<BubbleLabelProps, typeof BubbleLabel>;
}
export declare const BubbleSeries: FC<Partial<BubbleSeriesProps>>;
