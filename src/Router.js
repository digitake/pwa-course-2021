import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from "./Profile";
import Home from "./Home";
import Addfriend from "./Addfriend";
import Friend from "./Friend";

function Router(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/addfriend">
                    <Addfriend/>
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