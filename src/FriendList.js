import { Link } from 'react-router-dom';

function FriendList() {
 return(
     <div>
       FriendList
       <Link to="/">
           <button>
             Go Chatroom
           </button>
       </Link>
     </div>
 );
    
};

export default FriendList;