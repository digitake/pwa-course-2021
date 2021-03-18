import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Chatbox from './Chatbox';   
import FriendList from './FriendList';
import Profile from './Profile';
import Home from './Home';


function Router() {

    return (
<BrowserRouter>
<Switch>
<Route path="/profile">
        <Profile />
    </Route>
    <Route path="/friend-list">
            <FriendList />
    </Route>
   
   <Route part="/Home">
            <Home/>
    </Route>
    
    <Route part="/">
        <Chatbox />
        
    </Route>
</Switch>

</BrowserRouter>

        
    )
}


export default Router;
