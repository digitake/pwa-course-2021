
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  App  from "./App";
import FriendList from "./FriendList";
import ShopPage from "./ShopPage";
import Menu from "./Menu";
import ProfilePage from "./ProfilePage";
import GamePage from "./GamePage";
import Chatbox from "./Chatbox";


// Create Component
function Router()  {
    return(
        <BrowserRouter>
        <Switch>
          
            <Route path="/friend-list">
              <FriendList />
            </Route>
            
            <Route path="/shop-page">
              <ShopPage />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/profile-page">
              <ProfilePage />
            </Route>

            <Route path="/game-page">
              <GamePage />
            </Route>

            <Route path="/">
              <Chatbox />
            </Route>

        </Switch>
        </BrowserRouter>

    )
};

export default Router; //Run Router

