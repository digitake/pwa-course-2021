import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Shop from "./Shop";
import Chatroom from "./Chatroom";
import Chatbox from "./Chatbox";
import Profile from "./Profile";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />    
                </Route>
                <Route path="/shop">
                    <Shop />
                </Route>  
                <Route path="/chatroom">
                    <Chatroom />
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>

                <Route path ="/profile">
                    <Profile />
                </Route>
            </Switch> 
        </BrowserRouter>
    )
};


export default Router;