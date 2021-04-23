import './App.css';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import {RiChat3Fill } from 'react-icons/ri';
import { RiChatPrivateFill } from 'react-icons/ri';



function App({children}) {
 
  return (
    <div className="App">
      <div className="App-header">
      <Link to="/DarkChat">
             <div>
               <RiChatPrivateFill size = "3em" color = "white"/> 
               </div>
             </Link>
             <Link to="/App">
            <div>
               <RiChat3Fill size = "3em" color = "white"/> 
            </div>
             </Link>
            <Link to="/friend-list">
            <div>
               <FaUserFriends size = "3em" color = "white"/> 
               </div>
             </Link>
             <Link to="/Profile">
             <div>
               <CgProfile size = "3em" color = "white"/> 
              </div>
             </Link>
         </div>
      <div className ="App-content">
        {children}
    </div>
    </div>
  );
}

export default App;
