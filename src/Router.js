import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Loading from './Loading';
import InsertPassword from './InsertPassword';
import Lobby from "./Lobby";
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/lobby'>
                    <Lobby />
                </Route>
                <Route path='/insert-password'>
                    <InsertPassword />
                </Route>
                <Route path='/loading'>
                    <Loading />
                </Route>
                <Route path='/friend-list'>
                    <FriendList />
                </Route>
                <Route path='/'>
                    <App />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Router;