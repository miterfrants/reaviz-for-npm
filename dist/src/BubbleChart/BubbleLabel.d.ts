import { FC } from 'react';
import { HierarchyCircularNode } from 'd3-hierarchy';
export interface BubbleLabelProps {
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * The internal data object built by d3
     */
    data: HierarchyCircularNode<any>;
    /**
     * Font size of the text.
     */
    fontSize?: number;
    /**
     * Font family of the text.
     */
    fontFamily?: string;
    /**
     * Fill of the text.
     */
    fill?: string;
    /**
     * Should wrap text or not.
     */
    wrap?: boolean;
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Format label.
     */
    format?: (data: any) => any;
}
export declare const BubbleLabel: FC<Partial<BubbleLabelProps>>;
