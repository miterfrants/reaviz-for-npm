import { PureComponent } from 'react';
import { ChartDataShape } from '../../../common/data';
export interface SequentialLegendProps {
    /**
     * CSS Class name.
     */
    className?: any;
    /**
     * CSS Styles.
     */
    style?: any;
    /**
     * Orientation of the legend.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Data to use to render the scale.
     */
    data: ChartDataShape[];
    /**
     * Color scheme for the scale.
     */
    colorScheme: string[];
}
export declare class SequentialLegend extends PureComponent<SequentialLegendProps> {
    static defaultProps: Partial<SequentialLegendProps>;
    render(): JSX.Element;
}
