import { FC } from 'react';
export interface MarkLineProps {
    height: number;
    pointX?: number;
    strokeColor: string;
    strokeWidth: number;
}
export declare const MarkLine: FC<Partial<MarkLineProps>>;
