import { Link } from 'react-router-dom';
import App from './App';

import chatroomphoto from './image/home.png';
import profilephoto from './image/user.png';
import Addfriendphoto from './image/addfriend.png';
import FriendListphoto from './image/users_1.png';

function HomePage() {
    return (
        <App>
        <div>

            <Link to="/friend-list">
                <img src={FriendListphoto} width="400"></img>
            </Link>

            <Link to="/">
                <img src={chatroomphoto} width="400"></img>
            </Link>

            <Link to="/profile">
                <img src={profilephoto} width="400"></img>
            </Link>

            <Link to="/add-friend">
                <img src={Addfriendphoto} width="400" />
            </Link>
            
        </div>
        </App>
    )
};

export default HomePage;