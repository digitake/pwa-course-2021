import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Prologin from './project/Prologin';
import Prosetting from './project/Prosetting';
import ProFriend from './project/ProFriend'

function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/Prosetting">
                    <Prosetting />
                </Route>
                <Route path = "/Prologin">
                    <Prologin />
                </Route>
                <Route path = "/Profriend">
                    <ProFriend />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;