import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Main from "./Main";
import Home from "./Home";
import AddFriend from "./AddFriend";
import Friend from "./Friend";

function Router(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="/addfriend">
                    <AddFriend/>
                </Route>
                <Route path="/friend">
                    <Friend/>
                </Route>
                <Route path="/friendlist">
                    <FriendList/>
                </Route>
                <Route path="/chatbox">
                    <Chatbox />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;