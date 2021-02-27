import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/Hello'>
                    <Test />
                </Route>
                <Route path='/'>
                    <App />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

function Test(props) {
    return (
        <div>
            <h1>
            HELLO WORLD
            </h1>
        </div>
    );
}

export default Router;