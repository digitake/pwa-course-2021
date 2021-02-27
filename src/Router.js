import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Register from './Register';
import Login from './Login';
import Feed from './Feed';
import Settings from './Settings';
import InsepectProfile from './InsepectProfile';
import ProfileSetting from './ProfileSetting';
import Loading from './Loading';
import InsertPasssword from './InsertPassword';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/loading'>
                    <Loading />
                </Route>
                <Route path='/insert-password'>
                    <InsertPasssword />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
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
                <Route path='/'>
                    <App />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Router;
