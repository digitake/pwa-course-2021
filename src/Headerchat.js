import './Headerchat.css';
import { FiMicOff,FiLogOut,FiClipboard,FiSearch,FiMenu,FiX } from "react-icons/fi";
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Headerchat({children}) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

return(
  
    <div className="AppPrivate">
    <div className="header">
      <div className="header-content">
      <div className="chatname">
      <Link to = "/HomePage">
        <img src = "Union(1).png" alt = "" /> 
      </Link>
        <a href ="#"> Chatroom</a>
      </div>
      <ul className={click ? "menu active" : "menu"}>
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
      <Link to = '/PrivatePage'>
      <a href="#"><FiLogOut/> Leave </a>
      </Link>
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