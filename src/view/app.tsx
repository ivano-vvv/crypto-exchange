import {AppContextProvider} from '../context';
import './global.css';
import {Main} from './modules';

export function App() {
    return (
        <AppContextProvider>
            <Main />
        </AppContextProvider>
    );
}
