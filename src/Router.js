import { BrowserRouter, Switch, Route}   from 'react-router-dom';
import App from './App'
import FriendList from './Rigister';
import LoginApp from './LoginApp'


function Router() {    
    return(
        <BrowserRouter>
          <Switch>

          <Route path = "/Logo-App">
            <LoginApp />

          </Route>
          <Route path = "/Register">
              <FriendList />
                </Route>

              <Route path = "/Chat-Room">
                <App />
              </Route>

              <Route path = "/">
            <LoginApp />
          </Route>

          </Switch>
        </BrowserRouter>
    )
};
  export default Router;
  
