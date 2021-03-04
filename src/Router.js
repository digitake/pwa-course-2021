<<<<<<< HEAD
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendsList from './FriendsList';

function Router() {
    return (
    <BrowserRouter>
     <Switch>
     <Route path="/friend-list">
      <FriendsList />
     </Route>
     <Route path="/">
     <App/>
     </Route>
     </Switch>
    </BrowserRouter>
    )
=======
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import FriendList from "./FriendList";

function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route pat="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
>>>>>>> 933622d32c68d01635d6dcaff33149ef58308701
};

export default Router;