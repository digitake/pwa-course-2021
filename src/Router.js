import {BrowserRouter, Switch , Route} from 'react-router-dom';
<<<<<<< HEAD
import Chatbox from './Chatbox';
import ChatRoom from './ChatRoom';
import ProFriend from './project/ProFriend';
import FriendList from './FriendList';

=======
import Prologin from './project/Prologin';
import Prosetting from './project/Prosetting';
import ProFriend from './project/ProFriend';
import Profile from './project/Profile';
import ProChatroom from './project/ProChatroom';
>>>>>>> ab53e7d4fe1c2da023a6dd8f250365dcfa395295

function Router() {

    return(
        <BrowserRouter>
            <Switch>
<<<<<<< HEAD
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
=======
                <Route path = "/Prosetting">
                    <Prosetting />
                </Route>
                <Route path = "/Profriend">
                    <ProFriend />
                </Route>
                <Route path = "/Profile">
                    <Profile />
                </Route>
                <Route path = "/Prochatroom">
                    <ProChatroom />
                </Route>
                <Route path = "">
                    <Prologin />
>>>>>>> ab53e7d4fe1c2da023a6dd8f250365dcfa395295
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;