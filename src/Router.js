import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
//import MainApp from './MainApp';
import Home from './Home';
import Chatbox from './Chatbox';


/**สร้าง Component */
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Home">
                    <Home />
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
};

export default Router; /** ส่ง Component ออกไปใช้ */