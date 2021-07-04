import {ReactElement} from 'react';

import {DefaultComponentProps} from '../../../typings';

export function CloseIcon({className}: DefaultComponentProps): ReactElement {
    return (
        <svg
            className={className}
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.18 3.26L8 7.44 3.82 3.26l-.56.56L7.44 8l-4.18 4.18.56.56L8 8.56l4.18 4.18.56-.56L8.56 8l4.18-4.18-.56-.56z"
                fill="#80A2B6"
                stroke="#80A2B6"
            />
        </svg>
    );
}
