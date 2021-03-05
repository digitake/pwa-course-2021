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

function Router() {
    return (
        <BrowserRouter>
            <Switch>
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
