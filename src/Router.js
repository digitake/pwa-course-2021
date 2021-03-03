import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import ChatBot from './ChatBot';

function Router() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chat-bot">
                    <ChatBot />
                </Route>
                <Route path="/chat-room">
                    <App />
                </Route>
                <Route path="/">
                    <FriendList />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;