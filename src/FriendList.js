import {Link} from 'react-router-dom';

function FriendList(){
    return(
        <div>
            <Link to="/">
                <button>
                    Go to ChatRoom
                </button>
            </Link>
        </div>
        
    )
}

export default FriendList;