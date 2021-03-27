import { BrowserRouter, Switch, Route } from "react-router-dom";

import FriendList from './FriendList';
import Chatbox from './Chatbox';
import Profile from './Profile';
import FlexShow from './FlexShow';

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/flex">
          <FlexShow />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
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