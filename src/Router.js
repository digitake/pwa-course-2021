import { BrowserRouter, Switch , Route} from 'react-router-dom'
import App from './App';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Group from './group';
import Profile from './Profile';

function Router() {
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/profile">
                    <Profile />
                    </Route>
                <Route path="/group">
                    <Group />
                    </Route>
                <Route path="/friend-list">
                    <FriendList />
                    </Route>
                <Route path="/chatbox">
                    <Chatbox />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;