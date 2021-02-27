import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendsList from './FriendsList';

function Router() {
    return (
    <BrowserRouter>
     <Switch>
     <Route path="/friend-list">
      <FriendsList />
     </Route>
     <Route path="/">
     <App/>
     </Route>
     </Switch>
    </BrowserRouter>
    )
};

export default Router;