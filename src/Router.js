/** Import Router component เข้ามาเพื่อเตรียมใช้งาน */
import { BrowserRouter, Switch, Route } from 'react-router-dom';    
import App from './App';

function Router() {
    return (
        <BrowserRouter>
            <Switch>             
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};
    
export default Router; /**ส่งออก Router ไปให้โลกใช้งาน */