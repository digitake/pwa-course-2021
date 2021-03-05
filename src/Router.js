<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Shop from "./Shop";
=======
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
>>>>>>> c4a1fcf51668531f6a4a8d9f98fbd74c22aa5355

function Router() {

    return (
        <BrowserRouter>
<<<<<<< HEAD
            <Switch>
                <Route path="/friend-list">
                    <FriendList />    
                </Route>
                <Route path="/shop">
                    <Shop />
                </Route>  
                <Route path="/">
                    <App />
                </Route>
            </Switch> 
=======
        <Switch>
            <Route path="/friend-List">
                <FriendList />
                </Route>
            <Route path="/">
             <App />
            </Route>
        </Switch>
>>>>>>> c4a1fcf51668531f6a4a8d9f98fbd74c22aa5355
        </BrowserRouter>
    )
};

<<<<<<< HEAD

=======
>>>>>>> c4a1fcf51668531f6a4a8d9f98fbd74c22aa5355
export default Router;