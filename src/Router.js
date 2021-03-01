
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  App  from "./App";
import FriendList from "./FriendList";
import ShopPage from "./ShopPage";
import ProfilePage from "./ProfilePage";
import GamePage from "./GamePage";

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

            <Route path="/profile-page">
              <ProfilePage />
            </Route>

            <Route path="/game-page">
              <GamePage />
            </Route>

            <Route path="/">
              <App />
            </Route>

        </Switch>
        </BrowserRouter>

    )
};


export default Router; //Run Router

