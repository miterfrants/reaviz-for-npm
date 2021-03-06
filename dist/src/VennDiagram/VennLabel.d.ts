import { FC } from 'react';
export interface VennLabelProps {
    /**
     * Whether the shape is active or not.
     */
    active?: boolean | null;
    /**
     * Set by the parent element.
     */
    id?: string;
    /**
     * Show all labels or just the large ones. Default false.
     */
    showAll?: boolean;
    /**
     * The label type to show.
     */
    labelType: 'key' | 'value';
    /**
     * Should wrap text or not.
     */
    wrap?: boolean;
    /**
     * The internal data object built by venn.js
     */
    data: any;
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
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Format label.
     */
    format?: (data: any) => any;
}
export declare const VennLabel: FC<Partial<VennLabelProps>>;
