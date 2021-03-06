export declare const useInterpolate: ({ data, animated }: {
    data: any;
    animated: any;
}) => {
    transition: {
        type: string;
        velocity: number;
        damping: number;
        restDelta: number;
        restSpeed: number;
        delay?: undefined;
    } | {
        delay: number;
        type: boolean;
    };
    d: import("framer-motion").MotionValue<any>;
};
