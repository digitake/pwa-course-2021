import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile1 from './Profile1';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList/>
                </Route>
                <Route path="/profile1">
                    <Profile1/>
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
            </Switch> 
        </BrowserRouter>           
    )
};

export default Router;