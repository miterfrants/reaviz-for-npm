/**
 * Gets the min/max values handling nested arrays.
 */
export declare function extent(data: any[], attr: string): number[];
/**
 * Get the domain for the Y Axis.
 */
export declare function getYDomain({ data, scaled, isDiverging }: {
    data: any;
    scaled?: boolean;
    isDiverging?: boolean;
}): number[];
/**
 * Get the domain for the X Axis.
 */
export declare function getXDomain({ data, scaled, isDiverging }: {
    data: any;
    scaled?: boolean;
    isDiverging?: boolean;
}): number[];
