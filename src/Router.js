import {RouterBrowser,Switch,Route, BrowserRouter} from 'react-router-dom';
import Chatbox from './Chatbox' ;
import FriendList from './FriendList' ;
import Profile from './Profile' ;
import AddFriend from './AddFriend';
import HomePage from './HomePage';

function Router() {
    return(
        <BrowserRouter>

            <Switch>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/friend-list">
                    <FriendList />
                </Route>

                <Route path="/add-friend">
                    <AddFriend />
                </Route>

                <Route path="/">
                    <Chatbox />
                </Route>

                <Route path="/Home-page">
                    <HomePage />
                </Route>
                
            </Switch>

        </BrowserRouter>
    )
    
} ;

export default Router;