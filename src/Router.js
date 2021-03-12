// import router เข้ามาเตรียมใช้งาน //

import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import PageDrawing from './PageDrawing';
import Profile from './Profile';
import App from './App';

function Router(){
    return(
    <BrowserRouter>
        <Switch>
        <Route path="/App">
                <App />
            </Route>
            <Route path="/friend-list">
                <FriendList />
            </Route>
            <Route path="/PageDrawing">
                <PageDrawing />
            </Route>
            <Route path='/Profile'>
                <Profile />
            </Route>
            <Route path="/">
                <Chatbox />

            </Route>
        </Switch>
    </BrowserRouter>
    )
};

export default Router; // ส่งออก Router ไปให้ใช่งาน //
