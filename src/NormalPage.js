import './NormalPage.css';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import {RiChat3Fill } from 'react-icons/ri';
import { RiChatPrivateFill } from 'react-icons/ri';

function NormalPage({children}) {
    
    return (
       <div className = "NormalPage">
             <div className = "NormalPage-header">
             <Link to="/DarkChat">
             <div>
               <RiChatPrivateFill size = "3em" color = "white"/> 
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
        <div className = "NormalPage-chatroom">
        <div className = "NormalPage-Main">
            {children}
        </div>
        </div>
        </div>




    );
};

export default NormalPage;