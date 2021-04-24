import './App.css';
import { Link } from 'react-router-dom';
import AppLayoutFriend from './AppLayoutFriend';

function FriendList() {
    return (
    <AppLayoutFriend>
    <div className="App">
    <div className="App-content">
    </div>

    <div className="App-textbox-icon" >
      <div> <Link to="/chat-room"> <i class="fas fa-comment-dots"></i> </Link> </div>
      <div> <Link to="/chat-bot">  <i class="fas fa-robot"></i> </Link> </div>
      <div> <i class="fas fa-users"></i> </div>
    </div>
  </div>
  </AppLayoutFriend>
    );
};

export default FriendList;