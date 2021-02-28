import { BrowserRouter, Switch, Route}   from 'react-router-dom';
import App from './App'
import FriendList from './Rigister';
import LoginApp from './LoginApp'
import LoginPage from './LoginPage'


function Router() {    
    return(
        <BrowserRouter>
          <Switch>

          <Route path = "/LoginPage">
            <LoginPage />
          </Route>

          <Route path = "/AppChat">
            <App />
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