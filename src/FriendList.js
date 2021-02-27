import { Link } from 'react-router-dom';
import './App.css';

function FriendList() {
 return(
     <div className = "App bg">

         <Link to="/">
             <img src="ppp.jpg" alt="ppp.jpg" width="100px" height="100px"/>
         </Link>
     </div>
 );

};

export default FriendList;