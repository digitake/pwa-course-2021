import { BrowserRouter, Switch, Router}   from 'react-router-dom';
import App from './App'


function Router() {    
    return(
        <BrowserRouter>
          <Switch>
              <Router path = "/">
                <App />
              </Router>
          </Switch>
        </BrowserRouter>
    )
};
  export default Router;  
