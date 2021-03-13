import { BrowserRouter, Switch , Route} from 'react-router-dom'
import App from './App';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import GroupApp from './GroupApp';
import Profile from './Profile';

function Router() {
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/profile">
                    <Profile />
                    </Route>
                <Route path="/group">
                    <GroupApp />
                    </Route>
                <Route path="/friend-list">
                    <FriendList />
                    </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;