import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Login from './Login';
import Chat1 from './Login';
import Profile from './Register';

function Router() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/Register">
            <Profile />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/">
            <App />
        </Route>
        </Switch>
        </BrowserRouter>
    )
};

export default Router;