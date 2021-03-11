import { BrowserRouter, Switch , Route} from 'react-router-dom'
import App from './App';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from './Profile';

function Router() {
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/profile">
                    <Profile />
                    </Route>
                <Route path="/friend-list">
                    <FriendList />
                    </Route>
                    <Route path="/chatbox">
                    <Chatbox />
                    <Route path="/">
                    <App />
                    </Route>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;