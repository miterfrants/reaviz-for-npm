import { FC, ReactElement } from 'react';
import { IVennLayout } from '@upsetjs/venn.js';
import { ColorSchemeType } from '../common/color';
import { VennArc, VennArcProps } from './VennArc';
import { VennLabel, VennLabelProps } from './VennLabel';
import { VennOuterLabel, VennOuterLabelProps } from './VennOuterLabel';
export interface VennSeriesProps {
    /**
     * Id set by the parent.
     */
    id: string;
    /**
     * Active managed selections.
     */
    selections?: string[];
    /**
     * The internal data object built by venn.js
     */
    data: IVennLayout<any>[];
    /**
     * Color scheme for the chart.
     */
    colorScheme: ColorSchemeType;
    /**
     * Whether the chart is disabled.
     */
    disabled?: boolean;
    /**
     * Whether the chart is animated or not.
     */
    animated?: boolean;
    /**
     * Label element.
     */
    label?: ReactElement<VennLabelProps, typeof VennLabel> | null;
    /**
     * Label element.
     */
    outerLabel?: ReactElement<VennOuterLabelProps, typeof VennOuterLabel> | null;
    /**
     * Arc element.
     */
    arc?: ReactElement<VennArcProps, typeof VennArc> | null;
}
export declare const VennSeries: FC<Partial<VennSeriesProps>>;
