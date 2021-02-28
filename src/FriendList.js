import './LoginApp.css'
import {Link} from 'react-router-dom'


function FriendList(){
    return(
    <div >
        <div>
        Friend List
        <Link to = "/Chatt-Room">
        <button>
            Go ChatRoom
        </button>
        </Link>

        </div>
    </div>
    )
}
export default FriendList;