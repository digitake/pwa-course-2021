import { BrowserRouter, Switch, Route} from 'react-router-dom' ;
import App from './App';
import FriendList from './FriendList';
import HomePage from './HomePage';

function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/friend-list">
                <FriendList />
            </Route>
            <Route path="/home-page">
                <HomePage />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default Router;