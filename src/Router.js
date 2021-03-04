
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import FriendList from "./FriendList";
import Profiletar from "./Profile-Tar";
function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/profiletar">
                  <Profiletar/>
            </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route pat="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;