import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from "./Profile";
import Home from "./Home";
import Friend from "./Friend";
import AddFriend from "./AddFirend";

function Router(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile">
                    <Profile/>
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