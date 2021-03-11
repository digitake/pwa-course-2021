import './Headerchat.css';
import { FiMicOff,FiLogOut,FiMoreVertical,FiClipboard,FiSearch,FiSettings,FiUsers,FiPlusCircle,FiSend,FiMenu,FiX } from "react-icons/fi";
import React, { useState } from 'react';

function Headerchat({children}) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

return(
    <div className="AppPrivate">
    <div className="header">
      Chatroom
      <ul className="Function">
  <li className="Function-link">
        <a href="#"><FiSearch /> Search</a>
  </li>
  <li className="Function-link">
        <a href="#"><FiClipboard/> Note</a>
  </li>
  <li className="Function-link">
        <a href="#"><FiMicOff/> Mute Chat</a>
      </li>
      <li className="Function-link">
        <a href="#"><FiLogOut/> Leave</a>
      </li>
      </ul>
    </div>
    <div className="App-chatroom">
      {children}
    </div>
  </div>
  
);
}
export default Headerchat;