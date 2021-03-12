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
      <div className="header-content">
      <div className="chatname">
        <a href ="#"> Chatroom</a>
      </div>
      <ul className="menu">
  <li className="menu-link">
        <a href="#"><FiSearch /> Search</a>
  </li>
  <li className="menu-link">
        <a href="#"><FiClipboard/> Note</a>
  </li>
  <li className="menu-link">
        <a href="#"><FiMicOff/> Mute Chat</a>
      </li>
      <li className="menu-link">
        <a href="#"><FiLogOut/> Leave</a>
      </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FiX/>
        ) : (
          <FiMenu/>
        )}
       </div> 
    </div>
  </div>
  <div className="App-chatroom">
      {children}
    </div>
 </div> 
);
}
export default Headerchat;