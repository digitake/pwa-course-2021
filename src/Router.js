import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NeptuneLogin from './Pages/NeptuneLogin';
import NeptuneRegister from './Pages/NeptuneRegister';
import NeptunePin from './Pages/NeptunePin';
import NeptuneWelcome from './Pages/NeptuneWelcome';
import Chatbox from './Chatbox';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import FriendList from './FriendList';
import Feed from './Pages/Feed';
import Setting1 from './Pages/Setting1';
import Setting2 from './Pages/Setting2';

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

                <Route path='/login'>
                    <NeptuneLogin />
                </Route>
                <Route path="/register">
                    <NeptuneRegister />
                </Route>
                <Route path="/pin">
                    <NeptunePin />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path="/chat">
                    <Chatbox />
                </Route>
                <Route path="/feed">
                    <Feed />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/setting1">
                    <Setting1 />
                </Route>
                <Route path="/setting2">
                    <Setting2 />
                </Route>
                <Route path="/">
                    <NeptuneWelcome />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
