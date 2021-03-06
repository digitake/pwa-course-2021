import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FriendList from './FriendList';
import Setting from './Setting';
import PrivateChatRoom from './PrivateChatRoom';
import Profiles from './Profiles';
import App from './App';
import Chatbox from './Chatbox';
function Router() {

    return (
        <BrowserRouter>
        <Switch>
        <Route path="/friend-list">
            <FriendList/>
         </Route>
         <Route path="/setting">
            <Setting/>
         </Route>
         <Route path="/profiles">
            <Profiles/>
         </Route>
        <Route path="/PrivateChat">
            <PrivateChatRoom />
            </Route>
        <Route path="/">
            <Chatbox/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default Router;