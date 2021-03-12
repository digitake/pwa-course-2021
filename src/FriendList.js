import './App.css';
import { Link } from 'react-router-dom';
import AppLayoutFriend from './AppLayoutFriend';

function FriendList() {
    return (
    <AppLayoutFriend>
    <div className="App">
    <div className="App-content">
    </div>
    <div className="App-textbox-icon" ><Link to="/chat-room"> <i class="fas fa-comment-dots"></i> </Link>
    <Link to="/chat-bot">  <i class="fas fa-robot"></i> </Link>
    <i class="fas fa-users"></i>
    </div>
  </div>
  </AppLayoutFriend>
    );
};

export default FriendList;