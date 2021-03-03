import {BrowserRouter, Switch , Route} from 'react-router-dom';
/*import App from './App';*/
import ChatRoom from './ChatRoom';
import ProFriend from './project/ProFriend';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/chatroom">
                    <ChatRoom />
                </Route>
                <Route path="/ProFriend">
                    <ProFriend />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;