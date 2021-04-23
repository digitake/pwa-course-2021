import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import ProjectRandom from './Project-Random';
import AllChatInterface from './ChatFriend';
import MainNote from './Note';
import MainProfile from './Profile';
import Chatbox from './Chatbox-Test';

function Router(){

    return(
        <BrowserRouter>
        <Switch>

            <Route  path="/Chatbox-Test">
               <Chatbox />
            </Route>
        
            <Route path="/AllChat">
                <AllChatInterface/>
            </Route>

            <Route path="/random-main">
                <ProjectRandom />
            </Route>

            <Route path="/profile">
                <MainProfile />
            </Route>

            <Route path="/Note">
                <MainNote />
            </Route>

            <Route path="/">
                <App />
            </Route>

        </Switch>
        </BrowserRouter>
    );
};

export default Router;