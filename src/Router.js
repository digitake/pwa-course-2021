import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
/** FriendList*/
function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/friend-List">
                    <FriendList />
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;