import { Link } from 'react-router-dom';

import FriendListphoto from './image/friendlist.png'
import chatroomphoto from './image/chatroom.png'
import profilephoto from './image/profile.png'


function HomePage() {
    return (
        <div>
            <Link to="/friend-list">
                <img src={FriendListphoto} width="400" />
            </Link>
            <Link to="/">
                <img src={chatroomphoto} width="400" />
            </Link>
            <Link to="/profile">
                <img src={profilephoto} width="400" />
            </Link>
        </div>
    )
};


export default HomePage;