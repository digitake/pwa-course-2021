/* import router components เข้ามาเพื่อเตรียมใช้งาน */
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import InsepectProfile from'./InsepectProfile';
import ProfileSetting from "./ProfileSetting";
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from './Profile';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="profile">
                    <Profile />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/insepect-profile">
                    <InsepectProfile />
                </Route>
                <Route path="/profile-setting">
                    <ProfileSetting />
                </Route>
                <Route path="/">
                     <Chatbox />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
};

export default Router; //ส่งออก Router ไปให้โลกใช้งาน 