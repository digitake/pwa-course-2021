import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NeptuneLogin from './Pages/NeptuneLogin';
import NeptuneRegister from './Pages/NeptuneRegister';
import NeptunePin from './Pages/NeptunePin';
import NeptuneWelcome from './Pages/NeptuneWelcome';
import NeptuneChat from './Pages/NeptuneChat';
import Chatbox from './Chatbox';
import FriendList from './Pages/FriendList';
import Profile from './Profile';
import Home from './Pages/Home';

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
                    <Home />
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
                <Route path="/">
                    <NeptuneWelcome />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Router;
