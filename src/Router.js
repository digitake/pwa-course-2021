import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Chatroom from './Chatroom';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Chatroom">
                 <Chatroom/>
                </Route>
                <Route path="/">
                    <App/>
                 </Route>
             </Switch>
            </BrowserRouter>
    )
};

export default Router;