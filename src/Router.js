import{BrowserRouter,Switch,Route} from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';
import SupportList from './SupportList';

function Router(){
    
    return(
        <BrowserRouter>
         <Switch>
            <Route path="/support-list">
                <SupportList />
            </Route>
              <Route path="/friend-list">
                <FriendList />
              </Route>
             <Route path="/chatbox">
                <Chatbox />
             </Route>
         </Switch>
        </BrowserRouter>
    );
};

export default Router;

