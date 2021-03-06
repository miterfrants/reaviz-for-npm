export interface PropFunctionTypes {
    /**
     * Classnames to apply to the element.
     */
    className?: any;
    /**
     * CSS styles to apply to the element.
     */
    style?: any;
}
export declare const functionProps: (prop: string, val: any, data: any) => any;
export declare const constructFunctionProps: (props: PropFunctionTypes, data: any) => {
    className: any;
    style: any;
};
