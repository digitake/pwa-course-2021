/* import router components เข้ามาเพื่อเตรียมใช้งาน */
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import FriendList from'./FriendList';
import ProfileSetting from "./ProfileSetting";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/profile-setting">
                    <ProfileSetting />
                </Route>
                <Route path="/">
                     <App />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
};

export default Router; //ส่งออก Router ไปให้โลกใช้งาน 