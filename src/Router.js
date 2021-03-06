// import router เข้ามาเตรียมใช้งาน //

import {BrowserRouter,Switch, Route } from 'react-router-dom'
import App from './App'
import FriendList from './FriendList';
import PageDrawing from './PageDrawing';
import Home from './Home';

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
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
    )
};

export default Router; // ส่งออก Router ไปให้ใช่งาน //
