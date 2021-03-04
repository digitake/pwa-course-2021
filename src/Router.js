import{BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';

import PapFriendList from './PapFriendList';
import GroupList from './GroupList';

import Home from './Home';
import ChatFriend from './ChatFriend';
import GroupChat from './GroupChat';


function Router(){

return(
   <BrowserRouter>
   <Switch>


   <Route path = "/friend-list">
    <FriendList />



<Route path = "/pap-friendList">
    <PapFriendList />
</Route>

<Route path = "/group-List">
    <GroupList />
</Route>



<Route path="/chat-friend">
    <ChatFriend />
</Route>

<Route path="/group-chat">
    <GroupChat/>
</Route>

<Route path="/home">
    <Home />
</Route>



<Route path="/">
    <App/>
</Route>






   </Switch>
 </BrowserRouter>
)
};
export default Router;