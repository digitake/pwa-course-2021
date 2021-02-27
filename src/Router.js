<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
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


=======
import { BrowserRouter , Switch, Route } from 'react-router-dom' ;
import App from './App';
import FriendList from './FriendList';

function Router(){

    return(
        <BrowserRouter>
        <Switch>
            
            <Route path="/friend-list">

                <FriendList />
                
            </Route>

            <Route path="/">

            <App/>

            </Route>
        </Switch>
        </BrowserRouter>
    )
}
>>>>>>> 0923fd631a25ac73b8d2474bc8b1fc67e591e23c
export default Router;