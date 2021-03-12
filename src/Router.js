import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Prologin from './project/Prologin';
import Prosetting from './project/Prosetting';
import ProFriend from './project/ProFriend';
import Profile from './project/Profile';
import ProChatroom from './project/ProChatroom';

function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/Prosetting">
                    <Prosetting />
                </Route>
                <Route path = "/Profriend">
                    <ProFriend />
                </Route>
                <Route path = "/Profile">
                    <Profile />
                </Route>
                <Route path = "/Prochatroom">
                    <ProChatroom />
                </Route>
                <Route path = "">
                    <Prologin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;