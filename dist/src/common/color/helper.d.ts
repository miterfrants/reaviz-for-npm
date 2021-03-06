export declare type ColorSchemeType = ((data: any, index: number, active?: any[]) => string) | string[] | string;
declare type ColorHelperProps = {
    colorScheme: ColorSchemeType;
    point: any;
    data: any[];
    index: number;
    active: any[];
    scale?: any;
    domain?: any[];
    key?: any;
    attribute?: string;
    isMultiSeries?: boolean;
};
/**
 * Get a color given a range.
 */
export declare const getColor: (props: Partial<ColorHelperProps>) => any;
export {};
