import { FC } from 'react';
export interface GradientStopProps {
    offset: number | string;
    stopOpacity: number | string;
    color?: string;
}
export declare const GradientStop: FC<Partial<GradientStopProps>>;
