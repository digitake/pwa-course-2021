/**ดึงส่นประกอบจำเป็นมาใช่งานเพื่อสร้าง Component สำหรับ Router */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList'

/** สร้าง Component */
function Router() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/friend-list">
                <FriendList />
            </Route> 
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>
    );
};

export default Router; /** ส่ง Component ออกไปให้โลกได้ใช้งาน */