import {observer} from 'mobx-react-lite';
import {useState, useEffect, ReactElement} from 'react';

import {
    useInitializationService,
    useErrorIndicationService,
    useThrobberService,
} from '../../../context';
import {Throbber} from '../../components';

import s from './main.module.css';

export const Main = observer((): ReactElement => {
    const initializationService = useInitializationService();

    const [firstRender, checkFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) {
            initializationService.init();
            checkFirstRender(false);
        }
    }, [firstRender]);

    const throbberService = useThrobberService();
    const errorIndicationService = useErrorIndicationService();

    const isThrobberOn = throbberService.isFetching;
    const isError = errorIndicationService.isError;

    return (
        <div className={s.self}>
            {isThrobberOn && <Throbber className={s.throbber} />}
            {isError && <span>error!</span>}
            {!isThrobberOn && !isError && <h1>hello world</h1>}
        </div>
    );
});
