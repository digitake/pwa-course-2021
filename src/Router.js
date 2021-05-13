
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FriendList from './FriendList';
import Chatbox from './Chatbox';
import Profile from './Profile';
import AddFriend from './AddFriend';
import Friend from './Friend';

function Router() {
    
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/addfriend">
                    <AddFriend />
                </Route>
                <Route path="/friend">
                    <Friend />
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;