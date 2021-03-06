import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Chatbox from './Chatbox'

function Router() {
    
    return(
        <BrowserRouter>
            <Switch>
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