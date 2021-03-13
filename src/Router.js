import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import ChatBox from "./Chatbox"; 
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";
import EndTrue from "./EndTrue";
import EndFalse from "./EndFalse";
import Profiletaro from "./Profile-Taro";
import LoadingBar from "./LoadingBar";


function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/App">
                  <ChatBox/>
                </Route>
                <Route path="/Profile_Tar">
                  <Profiletar />
                </Route>
                <Route path="/Eye_Scene">
                    <LoadingBar/>
                </Route>
                <Route path="/Profile_Taro">
                  <Profiletaro />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/LobbySetting">
                    <LobbySetting />
                </Route>
                <Route path="/Loding_Scene">
                    <EnterApp_3ofghost />
                </Route>
                <Route path="/EndTrue">
                    <EndTrue />
                </Route>
                <Route path="/EndFalse">
                    <EndFalse />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

