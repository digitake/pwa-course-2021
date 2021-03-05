import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Chats from './Chats';
import Home from './Home';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chats">
                    <Chats />
                </Route>
                <Route path="/">
                    <App/>
                </Route>
                <Route path="/home">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;