import { FC } from 'react';
export interface DiscreteLegendSymbolProps {
    /**
     * Color for the symbol set by the `DiscreteLegendEntry`.
     */
    color: string;
    /**
     * CSS Class names.
     */
    className?: string;
}
export declare const DiscreteLegendSymbol: FC<Partial<DiscreteLegendSymbolProps>>;
