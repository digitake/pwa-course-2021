import {Link} from 'react-router-dom'

function FriendList(){
    return(
    <div>
        Friend List
        <Link to = "/">
        <button>
            Go ChatRoom
        </button>
        </Link>
    </div>)
}
export default FriendList;