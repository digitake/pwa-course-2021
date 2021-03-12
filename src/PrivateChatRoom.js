import React, { useState } from 'react';
import './PrivateChatRoom.css';
import Headerchat from './Headerchat';
import { FiMicOff,FiLogOut,FiMoreVertical,FiClipboard,FiSearch,FiSettings,FiUsers,FiPlusCircle,FiSend,FiMenu,FiX } from "react-icons/fi";

function PrivateChatRoom() {
  const [text, setText] = useState("")
  const [lines, setLines] = useState(["msg1"]);
  const onTextChange = (event) => {
    setText(event.target.value);
  };
  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
      <Headerchat>
    <div className="AppPrivate">
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
    </Headerchat>
  );
}

export default PrivateChatRoom;
