import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Prologin from './project/Prologin';


function Router() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/Prologin">
                    <Prologin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;