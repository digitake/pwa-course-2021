import App from './App';
import Calendar from './Calendar';
import Profile from './Profile';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** FriendList*/

function Router(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route> 
                
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;