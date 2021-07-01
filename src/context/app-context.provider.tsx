import {ReactElement} from 'react';

import {WrapperProps} from '../view/typings';
import {CurrenciesServiceProvider} from './currencies';
import {ErrorIndicationServiceProvider} from './error-indication';
import {InitializationServiceProvider} from './initialization';
import {ThrobberServiceProvider} from './throbber';

export function AppContextProvider(props: WrapperProps): ReactElement {
    // TODO: продумать более читаемую реализацию
    return (
        <InitializationServiceProvider>
            <ThrobberServiceProvider>
                <ErrorIndicationServiceProvider>
                    <CurrenciesServiceProvider>
                        {props.children}
                    </CurrenciesServiceProvider>
                </ErrorIndicationServiceProvider>
            </ThrobberServiceProvider>
        </InitializationServiceProvider>
    );
}
