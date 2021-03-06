import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NeptuneLogin from './Pages/NeptuneLogin';
import NeptuneRegister from './Pages/NeptuneRegister';
import NeptunePin from './Pages/NeptunePin';
import NeptuneWelcome from './Pages/NeptuneWelcome';
import NeptuneChat from './Pages/NeptuneChat';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
<<<<<<< HEAD
import Feed from './Pages/Feed';
=======
import Setting2 from './Pages/Setting2';
>>>>>>> 398916516a420aaa55dc5b104a6d9f4b948e5e96

function Router() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/setting-2">
                    <Setting2 />
                </Route>
                <Route path="/app">
                    <Chatbox />
                </Route>
                <Route path="/feed">
                    <Feed />
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
