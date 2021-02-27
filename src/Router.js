import {RouterBrowser,Switch,Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import MainPage from './MainPage' ;

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/a">
                    <MainPage />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
} ;

export default Router;