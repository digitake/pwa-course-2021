import {BrowserRouter, Switch , Route} from 'react-router-dom';
import ProFriend from './project/ProFriend';
import Prologin from './project/Prologin';
import Prosetting from './project/Prosetting';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/Prosetting">
                    <Prosetting />
                </Route>
                <Route path = "/ProFriend">
                    <ProFriend />
                </Route>
                <Route path = "/Prologin">
                    <Prologin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;