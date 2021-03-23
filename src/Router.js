import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";
import LoadingBar from "./LoadingBar";
import Phai from './ProfilePhai';
import Lobby from "./Lobby";
import FlexShow from "./FlexShow";

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
<<<<<<< HEAD
=======
                <Route path="/EndTrue">
                    <EndTrue/>
                </Route>
                <Route path="/EndFalse">
                    <EndFalse/>
                </Route>
>>>>>>> aac2d0a6f277f305d459f1c56f364986ae5eedb7
                <Route path="/">
                    <EnterApp_3ofghost/>
                </Route>
              
            </Switch>
        </BrowserRouter>
    );
};

//Plz give me A senpai

export default Router;

