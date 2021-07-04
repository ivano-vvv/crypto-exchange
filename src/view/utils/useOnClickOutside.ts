import {useEffect, RefObject} from 'react';

type Event = MouseEvent | TouchEvent;

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void,
    isActive: boolean
): void {
    useEffect(() => {
        const listener = (event: Event): void => {
            const el = ref?.current;

            if (!el || el.contains(event?.target as Node)) {
                return;
            }

            handler(event);
        };

        if (isActive) {
            document.addEventListener('click', listener);
        } else {
            document.removeEventListener('click', listener);
        }

        return (): void => {
            document.removeEventListener('click', listener);
        };
    }, [ref, handler, isActive]);
}
