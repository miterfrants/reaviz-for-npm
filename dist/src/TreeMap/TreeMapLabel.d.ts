import { FC } from 'react';
export interface TreeMapLabelProps {
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * The internal data object built by d3
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
     * Should wrap text or not.
     */
    wrap?: boolean;
}
export declare const TreeMapLabel: FC<Partial<TreeMapLabelProps>>;
