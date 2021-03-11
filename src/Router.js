import{BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import PapFriendList from './PapFriendList';
import GroupList from './GroupList';
import Home from './Home';
import ChatFriend from './ChatFriend';
import GroupChat from './GroupChat';
import Store from './Store';
import Chatbox from './Chatbox';
import Profile from './Profile';

import Buyshop from './Buyshop';
import Success from './Success1';

import HeadOfApp from './HeadOfApp';
import HeaderOfChat from './HeaderOfChat';


function Router(){

    return(
   <BrowserRouter>
   <Switch>

  
   <Route path = "/Success1">
    <Success/>
    </Route>

    <Route path = "/buyshop">
    <Buyshop/>
    </Route>


   <Route path ="/HeaderOfChat">
<HeaderOfChat/>
</Route>

   <Route path ="/HeadOfApp">
<HeadOfApp/>
</Route>



<Route path ="/profile">
<Profile/>
</Route>

   <Route path = "/Store">
    <Store />
    </Route>


   <Route path = "/friend-list">
    <FriendList />
    </Route>



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
    <Chatbox/>
</Route>






   </Switch>

 </BrowserRouter>
)
};
export default Router;