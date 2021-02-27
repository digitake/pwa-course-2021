import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import './FriendList.css';

function FriendList() {
    return (
        <div class="friendList-header">
        <div className="friendlist">
            <Link to="/">
            <img src={backButton}></img>
            </Link>
        </div>
        </div>
        
    )
}

export default FriendList;