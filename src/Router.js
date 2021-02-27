import { BrowserRouter, Switch, Router, Route}   from 'react-router-dom';
import App from './App'


function Router() {    
    return(
        <BrowserRouter>
          <Switch>
          <Route path = "/friend-list">
              <FirendList />
                </Route>
              <Route path = "/">
                <App />
              </Route>
          </Switch>
        </BrowserRouter>
    )
};
  export default Router;  
