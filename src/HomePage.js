import './App.css';

import { Link } from 'react-router-dom';
import friendlist from './image/FriendListphoto.png';
import profile from './image/profilephoto.png';
import addfriend from './image/addfriend.png';
import chat from './image/chat.png';

function HomePage() {
    return (
        
        <div>
        <Link to="/friend-list">
        <img src={friendlist} border="1"  width="100" height="100"/>
        </Link>

        <Link to="/profile">
        <img src={profile} border="1"  width="100" height="100" />
        </Link>

        <Link to="/addfriend">
        <img src={addfriend} border="1"  width="100" height="100"/>
        </Link>
        
        <Link to="/">
        <img src={chat} border="1"  width="100" height="100"/>
        </Link>
            
        </div>
       
        
    )
};

export default HomePage;