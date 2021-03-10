import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FriendList from './FriendList';
import Shop from "./Shop";
import Chatroom from "./Chatroom"
import Chatbox from './Chatbox';
import FriendProfile from "./FriendProfile";
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
                <Route path="/friend-profile">
                    <FriendProfile />
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
                

            </Switch> 
        </BrowserRouter>
    )
};


export default Router;