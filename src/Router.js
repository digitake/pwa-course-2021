import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FriendList from './FriendList';
import Setting from './Setting';
import PrivateChatRoom from './PrivateChatRoom';
import profiles from './profiles';
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
            <Setting/>
         </Route>
        <Route path="/PrivateChat">
            <PrivateChatRoom />
            </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default Router;