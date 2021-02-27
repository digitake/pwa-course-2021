import { BrowserRouter, Switch, Router } form 'react-router-dom';
import App from './App';
import FriendList form './FriendList';

function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Router path="/friend-List">
                    <FriendList />
                </Router>
                <Router path="/">
                    <App />
                </Router>
            </Switch>
        </BrowserRouter>
    )

};

export default Router;