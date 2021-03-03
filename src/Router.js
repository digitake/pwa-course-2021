import {BrowserRouter, Switch , Route} from 'react-router-dom';
import ChatRoom from './project/ChatRoom';
import ProFriend from './project/ProFriend';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/ProFriend">
                    <ProFriend />
                </Route>
                <Route path="/">
                    <ChatRoom />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;