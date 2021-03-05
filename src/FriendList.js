import './App.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

function FriendList() {
    return (
        <div className="App">
            <div className="App-header-friend"> <i class="fas fa-search-plus"></i> Chat  <i class="fas fa-user-plus"></i>
        </div>
        <div className="App-chatroom">
        </div>
        <div className="App-textbox-icon" ><Link to="/chat-room"> <i class="fas fa-comment-dots"></i> </Link>
        <Link to="/chat-bot">  <i class="fas fa-robot"></i> </Link>
        <i class="fas fa-users"></i>
        </div>
      </div>
    );
};

export default FriendList;