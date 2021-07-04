import {ReactElement} from 'react';

import {DefaultComponentProps} from '../../../typings';

export function ArrowIcon({className}: DefaultComponentProps): ReactElement {
    // TODO: add a straight svg imports

    return (
        <svg
            className={className}
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.01 11c.22 0 .44-.1.6-.25l4.14-4.24a.9.9 0 000-1.25.85.85 0 00-1.22 0L8 8.87 4.47 5.26a.86.86 0 00-.6-.26.85.85 0 00-.62.26.89.89 0 00-.25.63.9.9 0 00.25.62l4.14 4.24a.86.86 0 00.62.25z"
                fill="#80A2B6"
            />
        </svg>
    );
}
