/// <reference types="react" />
export interface CountInputs {
    /**
     * Number to animate to
     */
    to: number;
    /**
     * Number to animate from. Defaults 0.
     */
    from?: number;
    /**
     * Duration of the animation in seconds. Defaults 1.
     */
    duration?: number;
    /**
     * Delay of the animation. Defaults 0.
     */
    delay?: number;
    /**
     * Localize the number. Defaults true.
     */
    format?: boolean;
    /**
     * Number of decimal places. Defaults 0.
     */
    decimalPlaces?: number;
}
export declare const COUNT_DEFAULTS: {
    from: number;
    duration: number;
    delay: number;
    format: boolean;
    decimalPlaces: number;
};
export declare const useCount: ({ from, to, duration, delay, decimalPlaces, format }: CountInputs) => import("react").MutableRefObject<any>;
