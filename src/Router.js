import { browserRouter, Switch, Router } from 'react-router-dom';
import App from './App';

/** สร้าง component */
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

export default Router; /** ส่ง component ออกไปให้โลกได้ใช้งาน */