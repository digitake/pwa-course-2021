import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FriendList from './FriendList';
import Chatbox from './Chatbox';
import Profile from './Profile';
import AddFriend from './AddFriend';

function Router() {

    return(
        <BrowserRouter>
            <Switch>
            <Route path="/profile">
                    <FriendList />
                </Route>
                <Route path="/friend-list">
                    <AddFriend />
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router