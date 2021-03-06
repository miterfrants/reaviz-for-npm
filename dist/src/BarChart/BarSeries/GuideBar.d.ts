import { FC } from 'react';
export interface GuideBarProps extends SVGRect {
    active: boolean;
    fill?: string;
    opacity?: number;
}
export declare const GuideBar: FC<Partial<GuideBarProps>>;
