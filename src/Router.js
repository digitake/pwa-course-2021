import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';

import ChatboxTest from './Chatbox-Test';

import ProjectRandom from './Project-Random';
import RandomType from './Random-Type';
import RandomAdd from './Random-Add';
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

            <Route path="/random-type">
                <RandomType />
            </Route>
            
            <Route path="/random-add">
                <RandomAdd />
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