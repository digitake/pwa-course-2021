import {BrowserRouter, Switch , Route} from 'react-router-dom';
import ChatRoom from './project/ChatRoom';
import ProFriend from './project/ProFriend';
import Prologin from './project/Prologin';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/ProFriend">
                    <ProFriend />
                </Route>
                <Route path ="/Prologin">
                    <Prologin />
                </Route>
                <Route path="/">
                    <ChatRoom />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;