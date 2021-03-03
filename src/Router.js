import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import FriendList from './FriendList'
import Loading from './Loading'

function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/loading">
                    <Loading />
                </Route>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;