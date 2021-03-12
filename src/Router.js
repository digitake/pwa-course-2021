import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Prologin from './project/Prologin';
<<<<<<< HEAD

=======
import Prosetting from './project/Prosetting';
import ProFriend from './project/ProFriend';
import Profile from './project/Profile';
import ProChatroom from './project/ProChatroom';
>>>>>>> 433c972f817d0429cf5ab09923f22c688ed4316d

function Router() {

    return(
        <BrowserRouter>
            <Switch>
<<<<<<< HEAD
                <Route path = "/Prologin">
=======
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
>>>>>>> 433c972f817d0429cf5ab09923f22c688ed4316d
                    <Prologin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;