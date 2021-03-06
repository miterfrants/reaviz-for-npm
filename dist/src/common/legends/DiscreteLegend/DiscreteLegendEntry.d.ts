import React, { ReactNode, ReactElement, FC } from 'react';
import { DiscreteLegendSymbol, DiscreteLegendSymbolProps } from './DiscreteLegendSymbol';
export interface DiscreteLegendEntryProps {
    /**
     * Label for the entry.
     */
    label: string;
    /**
     * Color for the entry.
     */
    color: string;
    /**
     * Symbol for the entry.
     */
    symbol: ReactElement<DiscreteLegendSymbolProps, typeof DiscreteLegendSymbol> | ReactNode;
    /**
     * CSS Styles.
     */
    style?: React.CSSProperties;
    /**
     * CSS Class names.
     */
    className?: string;
    /**
     * HTML Title Attribute.
     */
    title?: string;
    /**
     * Orientation of the entry set internally by `DiscreteLegend`.
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Mouse enter event.
     */
    onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Mouse leave event.
     */
    onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * On click event.
     */
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const DiscreteLegendEntry: FC<Partial<DiscreteLegendEntryProps>>;
