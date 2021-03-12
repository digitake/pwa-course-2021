import { Link } from "react-router-dom";
import App from './App';



function FriendList() {
    return(
        <App>
        <div>
            Friend List
            <Link to="/">
               <button>
                   Go chatroom
               </button>
            </Link>
        </div>
       


     </App>
    );
}
export default FriendList;