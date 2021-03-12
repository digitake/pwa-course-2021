import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Chatbox from'./InClassRoom/Chatbox';
import FriendList from './InClassRoom/FriendList';
import Profile from './InClassRoom/Profile';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path= "/friend">
                    <FriendList />
                </Route>
                <Route path = "/profile">
                    <Profile />
                </Route>
                <Route path = "/">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;