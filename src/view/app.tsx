import {AppContextProvider} from '../context';
import './styles/global.css';
import {Main} from './modules';

export function App() {
    return (
        <AppContextProvider>
            <Main />
        </AppContextProvider>
    );
}
