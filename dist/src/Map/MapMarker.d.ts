import { FC } from 'react';
export interface MapMarkerProps {
    coordinates: [number, number];
    index: number;
    cy?: number;
    cx?: number;
    size?: number;
    tooltip?: any;
    onClick?: () => void;
}
export declare const MapMarker: FC<Partial<MapMarkerProps>>;
