

import {RouterBrowser,Switch,Route, BrowserRouter} from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import MainPage from './MainPage' ;
import AddFriend from './AddFriend' ; 

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/MainPage">
                    <MainPage />
                </Route>
                <Route path="/AddFriend">
                    <AddFriend />
                </Route>
                <Route path="/">
                    <Chatbox />
                </Route>
            </Switch>
        </BrowserRouter>  
    )
} ;


export default Router;