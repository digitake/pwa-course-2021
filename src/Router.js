//ดึงส่วนประกอบมาใช้งานเพื่อสร้างCpmponent สำหรับRounter
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from './Profile';
import DarkChat from './DarkChat';
import NormalPage from './NormalPage';

function Router(){


    return(
      <BrowserRouter>
        <Switch>
            <Route path ="/friend-list">
              <FriendList />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path = "/">
              <Chatbox />
            </Route>
            <Route path = "/DarkChat">
              <DarkChat />
            </Route>
            <Route path = "/NormalPage">
              <NormalPage />
            </Route>
            <Route path = "/">
              <Chatbox />
            </Route>
        </Switch>
     </BrowserRouter>
    )
}
export default Router;