import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Feed from './Feed';
import Settings from './Settings';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/friend-list'>
                    <FriendList />
                </Route>
                <Route path='/feed'>
                    <Feed />
                </Route>
                <Route path='/settings'>
                    <Settings />
                </Route>
                <Route path='/'>
                    <App />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Router;