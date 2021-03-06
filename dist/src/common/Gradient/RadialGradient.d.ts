import { FC, ReactElement } from 'react';
import { GradientStop, GradientStopProps } from './GradientStop';
export interface RadialGradientProps {
    id: string;
    stops: ReactElement<GradientStopProps, typeof GradientStop>[];
    color?: string;
    radius: number | string;
}
export declare const RadialGradient: FC<Partial<RadialGradientProps>>;
