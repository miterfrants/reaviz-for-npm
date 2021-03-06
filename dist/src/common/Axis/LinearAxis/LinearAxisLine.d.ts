import { FC, ReactElement } from 'react';
import { GradientProps, Gradient } from '../../Gradient';
export interface LinearAxisLineProps {
    height: number;
    width: number;
    strokeColor?: string;
    strokeWidth: number;
    strokeGradient: ReactElement<GradientProps, typeof Gradient> | null;
    scale: any;
    orientation: 'horizontal' | 'vertical';
    className?: any;
}
export declare const LinearAxisLine: FC<Partial<LinearAxisLineProps>>;
