<<<<<<< HEAD
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Profile from './Profile';

function Router() 
{
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/friend-list">
              <FriendList />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </BrowserRouter>    
=======
//ดึงส่วนประกอบมาใช้งานเพื่อสร้างCpmponent สำหรับRounter
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';

function Router()
{

    return(
      <BrowserRouter>
        <Switch>
            <Route path ="/friend-list">
              <FriendList />
            </Route>
            <Route path = "/">
              <App />
            </Route>
        </Switch>
     </BrowserRouter> 
>>>>>>> 733aa0d578751e009adf73f4336f46f4041307da
    )
};

export default Router;