import './NormalPage.css';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { AiFillShop } from 'react-icons/ai';

function NormalPage({children}) {
    
    return (
       <div className = "NormalPage">
             <div className = "NormalPage-header">
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
             <Link to="/Shop">
             <div>
               <AiFillShop size = "3em" color = "white"/> 
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