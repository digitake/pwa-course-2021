import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from'./InClassRoom/App';
import FriendList from './InClassRoom/FriendList';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path= "/friend">
                    <FriendList />
                </Route>
                <Route path = "/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;