import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import ProjectRandom from './Project-Random';
import AllChatInterface from './ChatFriend';

function Router(){

    return(
        <BrowserRouter>
        <Switch>

            <Route  path="/friend-list">
               <FriendList />
            </Route>

            <Route path="/AllChat">
                <AllChatInterface/>
            </Route>

            <Route path="/random-main">
                <ProjectRandom />
            </Route>
            
            <Route path="/">
                <App />
            </Route>

        </Switch>
        </BrowserRouter>
    );
};

export default Router;