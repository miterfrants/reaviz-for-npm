import React, { FC, ReactElement } from 'react';
import { DiscreteLegendEntryProps, DiscreteLegendEntry } from './DiscreteLegendEntry';
export interface DiscreteLegendProps {
    /**
     * CSS Class name.
     */
    className?: string;
    /**
     * CSS Styles.
     */
    style?: React.CSSProperties;
    /**
     * Orientation of the legend.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Entry components to show in the legend.
     */
    entries: ReactElement<DiscreteLegendEntryProps, typeof DiscreteLegendEntry>[];
}
export declare const DiscreteLegend: FC<Partial<DiscreteLegendProps>>;
