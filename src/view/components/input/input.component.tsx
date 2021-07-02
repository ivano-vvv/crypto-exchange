import {ReactElement} from 'react';

import {InputBase} from './base';
import {InputProps} from './input.typings';
import {NumberInput} from './number/number-input.component';

export function Input(props: InputProps): ReactElement {
    if (props.type === 'number') {
        return <NumberInput {...props} />;
    }

    return <InputBase {...props} />;
}
