/** ดึงส่วนประกอบที่จำเป็นมาใช้งานเพื่อสร้าง Component สำหรับ Router*/
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Calendar from './Calendar';
import Chats from './Chats';
import Home from './Home';
/** FriendList*/

function Router(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/chats">
                    <Chats />
                </Route>
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;