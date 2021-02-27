import { BrowserRouter, Switch, Router } from "react-router-dom";
import  App  from "./App";

function Router(){
    
  return(
   <BrowserRouter>
     <Switch>
       <Route path="/">
        <App/>
       </Route>
     </Switch>
    </BrowserRouter>
    )
};

export default Router; //Run Router