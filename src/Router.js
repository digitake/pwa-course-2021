import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calendar from './Calendar';
import Profile from './Profile';
import Home from './Home';
import EWallet from './EWallet';
import Chatbox from './Chatbox';
import Music from './Music';
import App from './App';
import Searching from './Searching';

/** FriendList*/

function Router(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/searching">
                    <Searching />
                </Route>
                <Route path="/e-wallet">
                    <EWallet />
                </Route>  
                <Route path="/calendar">
                    <Calendar />
                </Route>
                
                <Route path="/music">
                    <Music/>
                </Route>
            
                <Route path="/chatbox">
                    <Chatbox/>
                </Route>

                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};
export default Router;