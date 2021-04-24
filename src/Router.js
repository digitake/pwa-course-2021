
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import FriendList from './FriendList';
import Cradit from './Cradit';
import Home from './Home';
import DocWork from './DocWork';
import PhotoList from './PhotoList';
import Chatbox from './Chatbox';
import Presentation from './Presentation';
function  Router() {
    return(
       <BrowserRouter>
       <Switch>
              <Route path="/present">
                  <Presentation/>
              </Route>
              <Route path="/chat-room">
                  <Chatbox/>
              </Route>
              <Route path="/photo-list">
                  <PhotoList/>
              </Route>
              <Route path="/doc-work">
                  <DocWork/>
              </Route>
              <Route path="/cradit">
                  <Cradit/>
              </Route>
              <Route path="/friend-list">
                  <FriendList/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
        </Switch>
       </BrowserRouter>
    )
};
export default Router;