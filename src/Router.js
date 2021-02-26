import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import { Link } from 'react-router-dom';

function Router(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/friend-List">
                    <FriendList />
                </Route>
                <Route path='/'>
                    <App />
                    <div>
                        <Link to="friend-list">
                            <button>
                                Go To FriendList
                            </button>
                        </Link>
                    </div>            
                </Route>   
            </Switch>
        </BrowserRouter>    
    );
};

export default Router;