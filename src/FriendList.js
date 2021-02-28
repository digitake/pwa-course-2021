import './LoginApp.css'
import {Link} from 'react-router-dom'


function FriendList(){
    return(
    <div className = "LoginApp">
        <div>
        Friend List
        <Link to = "/">
        <button>
            Go ChatRoom
        </button>
        </Link>

        </div>
    </div>
    )
}
export default FriendList;