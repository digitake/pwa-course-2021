// import router เข้ามาเตรียมใช้งาน //

import {BrowserRouter,Switch, Route } from 'react-router-dom'
import App from './App'

function Router(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>
    )
};

export default Router; // ส่งออก Router ไปให้ใช่งาน //