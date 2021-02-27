import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import Shop from "./Shop";

function Router() {

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
};


export default Router;