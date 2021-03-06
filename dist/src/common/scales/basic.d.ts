interface ScaleConfig {
    type: 'category' | 'value' | 'time' | 'duration';
    roundDomains?: boolean;
    data: any[];
    domain?: any[];
    padding?: number;
    scaled?: boolean;
    width?: number;
    height?: number;
    isMultiSeries?: boolean;
    isDiverging?: boolean;
}
/**
 * Gets the X Scale function.
 */
export declare function getXScale({ type, roundDomains, data, width, domain, padding, scaled, isMultiSeries, isDiverging }: ScaleConfig): any;
/**
 * Gets the Y Scale function.
 */
export declare function getYScale({ type, height, data, domain, roundDomains, scaled, padding, isMultiSeries, isDiverging }: ScaleConfig): any;
export {};
