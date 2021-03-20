// import router เข้ามาเตรียมใช้งาน //

import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import PageDrawing from './PageDrawing';
import Profile from './Profile';
import App from './App';


function Router(){
    return(
<<<<<<< HEAD
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
=======
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
            <Route path="/Profile">
                <Profile />
            </Route>
            <Route path="/">
                <Chatbox />
            </Route>
        </Switch>
    </BrowserRouter>
    )
};
>>>>>>> 529244a7e80adccbdb18f8ddba7f78db8ad83c23

export default Router;
