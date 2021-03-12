import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from "./Profile";

function Router(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile">
                    <Profile/>
                </Route>   
                <Route path="/chatbox">
                    <Chatbox />
                </Route>
                <Route path='/'>
                    <FriendList />          
                </Route>   
            </Switch>
        </BrowserRouter>    
    );
};

export default Router;