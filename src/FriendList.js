import { Link } from 'react-router-dom';
import './App.css';

function FriendList() {
 return(
     <div className = "App bg">

         <Link to="/">
             <img src="ppp.jpg" alt="ppp.jpg" width="85px" height="85px"/>
         </Link>
     </div>
 );

};

export default FriendList;