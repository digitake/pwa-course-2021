import React, { useState } from 'react';
import './PrivateChatRoom.css';
import { Link } from 'react-router-dom';
import { FiMicOff,FiLogOut,FiMoreVertical,FiClipboard,FiSearch,FiSettings,FiUsers,FiPlusCircle,FiSend } from "react-icons/fi";

function PrivateChatRoom() {

  const [text, setText] = useState("")

  const [lines, setLines] = useState(["msg1" , "msg2" , "msg3" , "msg4" , "msg5"]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
    <div className="App">
      <div className="App-header">
        Private Chatroom
        <ul className="Function">
        <li className="Function-link">
          <a href="#"><FiSearch />Search</a>
        </li>
        <li className="Function-link">
          <a href="#"><FiClipboard/>Note</a>
        </li>
        <li className="Function-link">
          <a href="#"><FiMicOff/>Mute Chat</a>
        </li>
        <li className="Function-link">
          <a href="#"><FiLogOut/>Leave</a>
        </li>
        </ul>
        <div className="Mobile-menu">

        </div>
      </div>
      <Link to="/friend-list">
        <button>
        <FiUsers/>FriendList
        </button>
      </Link>
      <Link to="/setting">
        <button>
        <FiSettings/>Settings
        </button>
      </Link>
      <div className="App-chatroom">
      {
        lines.map(x =>{
          return <div className="App-chatroom-text">
                  {x}
                  </div>
        }) 
      }
      </div>
      <div className="App-textbox">
        <button class="btn"><FiPlusCircle/></button>
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Type a message" />
        <button className="App-textbox-send" button onClick={onSend}><FiSend/>Send</button>
      </div>
    </div>
    
  );
}

export default PrivateChatRoom;
