import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
/** */
function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Router path="/friend-List">
                    <FriendList />
                </Router>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;