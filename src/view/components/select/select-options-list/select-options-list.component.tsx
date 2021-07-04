import classNames from 'classnames';
import {ReactElement} from 'react';

import {SelectOption} from '../select-option';
import {SelectOptionsListProps} from './select-options-list.typings';
import s from './select-options-list.module.css';

export function SelectOptionsList({
    className,
    items,
    optionParams,
    selectHandlerProvider,
}: SelectOptionsListProps): ReactElement {
    return (
        <div className={classNames(className, s.self)}>
            {items.map(item => (
                <SelectOption
                    key={item.key}
                    item={item}
                    onSelect={
                        selectHandlerProvider
                            ? selectHandlerProvider(item)
                            : undefined
                    }
                    params={optionParams}
                />
            ))}
        </div>
    );
}
