import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';

function Router() {
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/">
                    <App />
                    <div>
                        <Link to="friend-list">
                            <button>
                                Go FriendList
                            </button>
                        </Link>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;