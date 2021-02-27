/** ดึงส่วนประกอบที่จำเป็นมาใช้งานเพื่อสร้าง Component สำหรับ Router*/
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

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

export default Router;