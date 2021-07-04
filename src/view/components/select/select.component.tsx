import classNames from 'classnames';
import {createRef, ReactElement, useState} from 'react';

import useOnClickOutside from '../../utils/useOnClickOutside';

import s from './select.module.css';
import {SelectItem, SelectProps} from './select.typings';
import {SelectHeaderComponent} from './select-header/select-header.component';
import {SelectOptionsList} from './select-options-list/select-options-list.component';

export function Select({
    className,
    items,
    selectedItem,
    onSelect,
    optionParams,
    headerParams,
    placeholder,
}: SelectProps): ReactElement {
    const selfRef = createRef<HTMLDivElement>();
    const [open, setOpenState] = useState(false);

    function handleWrapperClick(): void {
        setOpenState(!open);
    }

    function hanleOutsideClick(): void {
        setOpenState(false);
    }

    function getOptionClickHandler(item: SelectItem): () => void {
        return () => {
            setOpenState(false);

            if (onSelect) {
                onSelect(item.key);
            }
        };
    }

    useOnClickOutside(selfRef, hanleOutsideClick, open);

    return (
        <div className={classNames(className, s.self)} ref={selfRef}>
            <SelectHeaderComponent
                open={open}
                item={selectedItem}
                params={headerParams}
                placeholder={placeholder}
                onClick={handleWrapperClick}
            />
            <SelectOptionsList
                className={classNames(
                    s.optionsList,
                    open && s.optionsList__opened
                )}
                items={items}
                optionParams={optionParams}
                selectHandlerProvider={getOptionClickHandler}
            />
        </div>
    );
}
