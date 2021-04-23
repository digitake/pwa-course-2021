import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';

import ChatboxTest from './Chatbox-Test';

import ProjectRandom from './Project-Random';
import AllChatInterface from './ChatFriend';
import MainNote from './Note';
import MainProfile from './Profile';

function Router(){

    return(
        <BrowserRouter>
        <Switch>

            ----
            <Route  path="/chatbox-test">
               <ChatboxTest />
            </Route>
            ----



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