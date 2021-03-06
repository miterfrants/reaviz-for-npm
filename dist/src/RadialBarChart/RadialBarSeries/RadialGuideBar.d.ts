import { FC } from 'react';
export interface RadialGuideBarProps {
    active: boolean;
    path: string;
    fill?: string;
    opacity?: number;
}
export declare const RadialGuideBar: FC<Partial<RadialGuideBarProps>>;
