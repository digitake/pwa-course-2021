import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import LobbySetting from "./LobbySetting";

function Router() {
    
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/LobbySetting">
                  <LobbySetting />
              </Route>
              <Route path="/App">
                  <App />
              </Route>
          </Switch>  
        </BrowserRouter>
    )
}

export default Router;