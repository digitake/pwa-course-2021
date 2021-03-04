import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Eye_LoadingScene from "./Eye_LodeingScene";

function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Eye_Scene">
                    <Eye_LoadingScene />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/EnterApp_3ofghost">
                    <EnterApp_3ofghost />
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;