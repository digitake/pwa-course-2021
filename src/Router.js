import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chatbox from './Chatbox';
import FriendList from './FriendList'

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/friend-list">
          <FriendList />
        </Route>
        <Route path="/">
          <Chatbox />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;