import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";
import LoadingBar from "./LoadingBar";
import Phai from './ProfilePhai';
import Lobby from "./Lobby";
import FlexShow from "./FlexShow";
import EndTrue from "./EndTrue";
import EndFalse from "./EndFalse";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Profile_Tar">
                    <Profiletar/>
                </Route>
                <Route path="/ProfilePhai">
                    <Phai/>
                </Route>
                <Route path="/Eye_Scene">
                    <LoadingBar/>
                </Route>
                <Route path="/friend-list">
                    <FriendList/>
                </Route>
                <Route path="/App">
                    <Lobby/>
                </Route>
                <Route path="/LobbySetting">
                    <LobbySetting/>
                </Route>
                <Route path="/FlexShow">
                    <FlexShow/>
                </Route>
                <Route path="/EndTrue">
                    <EndTrue/>
                </Route>
                <Route path="/EndFalse">
                    <EndFalse/>
                </Route>
                <Route path="/">
                    <EnterApp_3ofghost/>
                </Route>
              
            </Switch>
        </BrowserRouter>
    );
};

//Plz give me A senpai

export default Router;

