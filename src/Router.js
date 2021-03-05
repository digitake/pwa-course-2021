import App from './App';
import Calendar from './Calendar';
import Chats from './Chats';
import Profile from './Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** FriendList*/
function Router() {

    return (
        <BrowserRouter>
            <Switch>
             <Route path="/profile">
                    <Profile />
                </Route> 
                <Route path="/chats">
                    <Chats />
                </Route>
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;