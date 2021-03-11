import { BrowserRouter, Switch, Route}   from 'react-router-dom'
import App from './App'
import Register from './Rigister'
import RegisterNextStep from './RegisterNextStep'
import LoginApp from './LoginApp'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import SettingPage from './SettingPage'
import Chatroom from './Chatroom'
import PrivatePage from './PrivatePage'
import GroupChatRoom from './GroupChatRoom'


function Router() {    
    return(
      <BrowserRouter>
        <Switch>
        <Route path = "/GroupChatRoom">
             <GroupChatRoom/>
           </Route>
        <Route path = "/PrivatePage">
             <PrivatePage/>
           </Route>
        <Route path = "/Chatroom">
             <Chatroom />
           </Route>
          <Route path = "/SettingPage">
             <SettingPage />
           </Route>
          <Route path = "/HomePage">
             <HomePage />
            </Route>
          <Route path = "/LoginPage">
             <LoginPage />
            </Route>
          <Route path = "/Register">
              <Register />
            </Route>
          <Route path = "/RegisterNextStep">
                <RegisterNextStep />
              </Route>
          <Route path = "/Chat-Room">
              <App />
            </Route>
          <Route path = "/">
              <LoginApp />
            </Route>

         </Switch>
      </BrowserRouter>
    )
};

export default Router;
