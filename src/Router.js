import {BrowserRouter, Switch , Route} from 'react-router-dom';
import ProChatroom from './project/ProChatroom';
import FriendList from './FriendList';


function Router() {
    
    return(
        <BrowserRouter>
            <Switch>
              <Route path="/FriendList">
                  <FriendList />
              </Route>
              <Route path="/ProChatroom">
                  <ProChatroom/>
              </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;