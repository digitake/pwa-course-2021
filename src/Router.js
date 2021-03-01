
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  App  from "./App";
import FriendList from "./FriendList";
import ShopPage from "./ShopPage";

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

            <Route path="/">
              <App />
            </Route>

        </Switch>
        </BrowserRouter>

    )
};


export default Router; //Run Router

