import{BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Home from './Home';
function Router(){

return(
   <BrowserRouter>
   <Switch>


   <Route path = "/friend-list">
    <FriendList />
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