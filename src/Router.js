import {BrowserRouter, Switch , Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import ChatRoom from './ChatRoom';
import Bruh from './project/Bruh';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/">
                    <App />
                </Route>
                <Route path="/chatroom">
                    <ChatRoom />
                </Route>
                <Route path="/bruh">
                    <Bruh />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;