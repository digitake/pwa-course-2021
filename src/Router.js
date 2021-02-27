import { browserRouter, Switch, Router } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Friend-List">
                    <FriendList />
                        </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;