import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Chatbox from './Chatbox';
import Profile from './Profile';
import AddFriend from './AddFriend';
import FriendList from './FriendList';

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
                    <FriendList />
                </Route>
                <Route path="/chatbox">
                    <Chatbox />
                </Route>

            </Switch>
        </BrowserRouter>
  




    );
};


export default Router;