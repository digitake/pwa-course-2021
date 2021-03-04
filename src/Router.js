import{BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import PapFriendList from './PapFriendList';
import GroupList from './GroupList';
function Router(){

return(
   <BrowserRouter>
   <Switch>


   <Route path = "/friend-list">
    <FriendList />
</Route>

<Route path = "/pap-friendList">
    <PapFriendList />
</Route>

<Route path = "/group-List">
    <GroupList />
</Route>

<Route path="/">
    <App/>
</Route>




   </Switch>
 </BrowserRouter>
)
};
export default Router;