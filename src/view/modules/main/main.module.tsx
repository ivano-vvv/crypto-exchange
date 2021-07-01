import {observer} from 'mobx-react-lite';
import {useContext, useState, useEffect, ReactElement} from 'react';

import {
    InitializationServiceContext,
    useErrorIndicationService,
    useThrobberService,
} from '../../../context';

export const Main = observer((): ReactElement => {
    const initializationService = useContext(InitializationServiceContext);

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
        <div className="main">
            {isThrobberOn && <span>loading...</span>}
            {isError && <span>error!</span>}
            {!isThrobberOn && !isError && <h1>hello world</h1>}
        </div>
    );
});
