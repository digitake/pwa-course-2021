import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Chatbox from './Chatbox';
import ChatRoom from './ChatRoom';
import ProFriend from './project/ProFriend';
import FriendList from './FriendList';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/chatroom">
                    <ChatRoom />
                </Route>
                <Route path="/fri">
                    <FriendList />
                </Route>
                <Route path="/ProFriend">
                    <ProFriend />
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;