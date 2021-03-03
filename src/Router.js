
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  App  from "./App";
import FriendList from "./FriendList";
import ShopPage from "./ShopPage";
import Game from "./Game";
import Menu from "./Menu";

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

            <Route path="/game">
              <Game />
            </Route>

            <Route path="/Menu">
              <Menu />
            </Route>

            <Route path="/">
              <App />
            </Route>

        </Switch>
        </BrowserRouter>

    )
};


export default Router; //Run Router

