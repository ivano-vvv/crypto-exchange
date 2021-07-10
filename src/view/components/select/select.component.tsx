import classNames from 'classnames';
import {createRef, ReactElement, useState} from 'react';

import useOnClickOutside from '../../utils/useOnClickOutside';

import s from './select.module.css';
import {SelectItem, SelectProps} from './select.typings';
import {SelectHeader} from './select-header/select-header.component';
import {SelectOptionsList} from './select-options-list/select-options-list.component';

export function Select({
    className,
    items,
    selectedItem,
    onSelect,
    onTrigger,
    optionParams,
    headerParams,
    placeholder,
    combined,
}: SelectProps): ReactElement {
    const selfRef = createRef<HTMLDivElement>();
    const [open, setOpenState] = useState(false);

    function applyNewOpenState(value: boolean): void {
        setOpenState(value);
        onTrigger && onTrigger(value);
    }

    function handleWrapperClick(): void {
        applyNewOpenState(!open);
    }

    function hanleOutsideClick(): void {
        applyNewOpenState(false);
    }

    function getOptionClickHandler(item: SelectItem): () => void {
        return () => {
            applyNewOpenState(false);
            onSelect && onSelect(item);
        };
    }

    useOnClickOutside(selfRef, hanleOutsideClick, open);

    return (
        <div className={classNames(className, s.self)} ref={selfRef}>
            <SelectHeader
                combined={combined}
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
