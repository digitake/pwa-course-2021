import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FriendList from './FriendList';
import ChatBot from './ChatBot';
import Chatbox from './Chatbox';

function Router() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chat-bot">
                    <ChatBot />
                </Route>
                <Route path="/chat-room">
                    <Chatbox />
                </Route>
                <Route path="/">
                    <FriendList />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;