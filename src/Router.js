import { BrowserRouter, Switch, Route}   from 'react-router-dom';
import App from './App'
import Register from './Rigister';
import RegisterNextStep from './RegisterNextStep';
import LoginApp from './LoginApp'
import LoginPage from './LoginPage'
import HomePage from './HomePage'


function Router() {    
    return(
        <BrowserRouter>
          <Switch>

          <Route path = "/HomePage">
            <HomePage />
          </Route>

          <Route path = "/LoginPage">
            <LoginPage />
          </Route>

          <Route path = "/Register">
            <Register />
          </Route>

          <Route path = "/RegisterNextStep">
              <RegisterNextStep />
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