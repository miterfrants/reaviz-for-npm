export declare const useInterpolate: ({ data, animated, arc }: {
    data: any;
    animated: any;
    arc: any;
}) => {
    d: import("framer-motion").MotionValue<string>;
    transition: {
        type: string;
        velocity: number;
        damping: number;
        restDelta: number;
        restSpeed: number;
        delay?: undefined;
    } | {
        delay: number;
    };
};
