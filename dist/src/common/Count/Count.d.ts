import { FC } from 'react';
import { CountInputs } from './useCount';
export interface CountProps extends CountInputs {
    className?: string;
}
export declare const Count: FC<CountProps>;
