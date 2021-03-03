import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Profile from './Project/Profile';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
              <Route path="/Profile">
                  <Profile/>
              </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;