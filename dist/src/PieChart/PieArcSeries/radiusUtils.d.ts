import { ArcData } from '../PieChart';
export declare function calculateOuterRadius(outerRadius: number, data: ArcData[], point: ArcData, explode: boolean): number;
export declare function calculateCentroid(data: ArcData[], innerRadius: number, outerRadius: number, explode: boolean): (point: ArcData) => [number, number];
export declare function calculateRadius(height: any, width: any, label: any, arcWidth: any, doughnut: any): {
    outerRadius: number;
    innerRadius: number;
    labelWidth: number;
};
export declare function calculateInnerArc(data: ArcData[], innerRadius: number, outerRadius: number, cornerRadius: number, padAngle: number, padRadius: number, explode: boolean): (point: ArcData) => string;
export declare function calculateLabelPositions(data: ArcData[], outerRadius: number, minDistance: number, cornerRadius: number, padAngle: number, padRadius: number, displayAllLabels: boolean): Array<[number, number] | null>;
