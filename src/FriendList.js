import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import './FriendList.css';

function FriendList() {
return (

    <div className="friendList">
       <div class="friendList-header">
           <div class="friendList-center">
               
           </div>
           <div className="friendlist">
               <Link to="/">
                <img src={backButton}></img>
                </Link>
            </div>
        </div>
    </div>
        
    )
}

export default FriendList;