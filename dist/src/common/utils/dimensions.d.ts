export interface Dimensions {
    xOffset: number;
    yOffset: number;
    height: number;
    width: number;
    chartWidth: number;
    chartHeight: number;
    xMargin: number;
    yMargin: number;
}
export interface DimensionParameter {
    xOffset: number;
    yOffset: number;
    yAxis: any;
    xAxis: any;
    height: number;
    width: number;
    margins: Margins;
}
export declare type Margins = [number, number] | [number, number, number, number] | number;
/**
 * Calculates the dimensions for the chart.
 */
export declare function getDimension({ xOffset, yOffset, height, width, margins }: DimensionParameter | any): Dimensions;
