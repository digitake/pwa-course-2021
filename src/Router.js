import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import Home from "./Home";
import Addfriend from "./Addfriend";
import Main from './Main';

function Router(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/main">
                    <Main/>
                </Route>
                <Route path="/addfriend">
                    <Addfriend/>
                </Route>
                <Route path="/friendlist">
                    <FriendList/>
                </Route>   
                <Route path="/chatbox">
                    <Chatbox />
                </Route>
                <Route path='/'>
                    <Home />          
                </Route>   
            </Switch>
        </BrowserRouter>    
    );
};

export default Router;