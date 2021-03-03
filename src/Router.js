import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Prologin from './project/Prologin';
import FriendList from './FriendList';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
              <Route path="/FriendList">
                  <FriendList />
              </Route>
              <Route path="/Prologin">
                  <Prologin />
              </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;