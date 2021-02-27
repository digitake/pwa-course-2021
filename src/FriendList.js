import { Link } from 'react-router-dom'
import backButton from './logo1.png'
import './FriendList.css';

function FriendList() {
    return (
        <div className="friendlist">
            
            <Link to="/">

            <img src={backButton}></img>
            

            </Link>
        </div>
    )
}

export default FriendList;