<<<<<<< HEAD
import { BrowserRouter,Switch,Route } from "react-router-dom";

import FriendList from './FriendList';
import Chatbox from './Chatbox';
import Profile from './Profile'


function Router()
{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/friend-list">
                <FriendList />
                </Route>
                <Route path="/">
                <Chatbox />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from './Feed';
import Settings from './Settings';
import InsepectProfile from './InsepectProfile';
import ProfileSetting from './ProfileSetting';
import Main from './Pages/Main';
import NeptuneLogin from './Pages/NeptuneLogin';
import NeptuneRegister from './Pages/NeptuneRegister';
import NeptunePin from './Pages/NeptunePin';
import NeptuneWelcome from './Pages/NeptuneWelcome';
import NeptuneChat from './Pages/NeptuneChat';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from './Profile';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/app">
                    <Chatbox />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                
                <Route path='/home'>
                    <Main />
                </Route>
                <Route path="/chat">
                    <NeptuneChat />
                </Route>
                <Route path='/login'>
                    <NeptuneLogin />
                </Route>
                <Route path="/register">
                    <NeptuneRegister />
                </Route>
                <Route path="/pin">
                    <NeptunePin />
                </Route>
                <Route path='/feed'>
                    <Feed />
                </Route>
                <Route path='/settings'>
                    <Settings />
                </Route>
                <Route path="/insepect-profile">
                    <InsepectProfile />
                </Route>
                <Route path="/profile-setting">
                    <ProfileSetting />
                </Route>
                <Route path="/">
                    <NeptuneWelcome />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Router;
>>>>>>> b49edfa271afdd785d6876546f642c3293919999
