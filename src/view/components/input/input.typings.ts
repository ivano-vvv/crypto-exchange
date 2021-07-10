import {InputHTMLAttributes} from 'react';
import {CombinedState} from '../shared.typings';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    combined?: CombinedState[];
}
