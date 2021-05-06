import { BrowserRouter, Switch , Route} from 'react-router-dom'
import App from './App';
import Chatbox from './Chatbox';
import Chatbox2 from './Chatbox2';
import FriendList from './FriendList';
import Group from './group';
import Profile from './Profile';

import "./App.css";
import "./Chatbox.css";
import "./Chatbox2.css";
import "./group.css";
import "./FriendList.css";
import "./Profile.css";

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
                <Route path="/chatbox2">
                    <Chatbox2 />
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