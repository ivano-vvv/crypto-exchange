import {useContext, useState, useEffect, ReactElement} from 'react';

import {InitializationServiceContext} from '../../../context';

export function Main(): ReactElement {
    const initializationService = useContext(InitializationServiceContext);

    const [firstRender, checkFirstRender] = useState(true);

    useEffect(() => {
        if (firstRender) {
            initializationService.init();
            checkFirstRender(false);
        }
    }, [firstRender]);

    return (
        <div className="App">
            <h1>hello world</h1>
        </div>
    );
}
