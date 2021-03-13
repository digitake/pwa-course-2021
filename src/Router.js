
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Chatbox from './Chatbox';   
import FriendList from './FriendList';
import Home from './Home';

function Router() {

    return (
<BrowserRouter>
<Switch><BrowserRouter>
<Switch>
    <Route path="/friend-list">
            <FriendList />
    </Route>
    <Route part="/home">
        <Home/>
    </Route>

    
</Switch>
</BrowserRouter>
    <Route path="/friend-list">
            <FriendList />
    </Route>
    <Route part="/">
        <Chatbox />
        
    </Route>
</Switch>

</BrowserRouter>

        
    )
}

export default Router;



