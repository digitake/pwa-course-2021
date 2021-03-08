<<<<<<< HEAD
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import SupportList from './SupportList';
=======
>>>>>>> b9baf8cdc6fd18c15d1425436ab5f12b445e6faa

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./App";
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Eye_LoadingScene from "./Eye_LodeingScene";
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";

function Router(){
    
    return(
        <BrowserRouter>
<<<<<<< HEAD
         <Switch>
            <Route path="/support-list">
                <SupportList />
            </Route>
              <Route path="/friend-list">
                <FriendList />
              </Route>
             <Route path="/chatbox">
                <Chatbox />
             </Route>
         </Switch>
=======
            <Switch>
                <Route path="/Profile_Tar">
                  <Profiletar />
                </Route>
                <Route path="/Eye_Scene">
                    <Eye_LoadingScene />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/App">
                    <App />
                </Route>
                <Route path="/LobbySetting">
                    <LobbySetting />
                </Route>
                <Route path="/">
                    <EnterApp_3ofghost />
                </Route>
            </Switch>
>>>>>>> b9baf8cdc6fd18c15d1425436ab5f12b445e6faa
        </BrowserRouter>
    );
};

export default Router;

