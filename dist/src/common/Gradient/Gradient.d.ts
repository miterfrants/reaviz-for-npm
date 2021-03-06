import { FC, ReactElement } from 'react';
import { GradientStop, GradientStopProps } from './GradientStop';
export interface GradientProps {
    id: string;
    stops: ReactElement<GradientStopProps, typeof GradientStop>[];
    color?: string;
    direction: 'vertical' | 'horizontal';
}
export declare const Gradient: FC<Partial<GradientProps>>;
