import { FC } from 'react';
export interface VennOuterLabelProps {
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
export declare const VennOuterLabel: FC<Partial<VennOuterLabelProps>>;
