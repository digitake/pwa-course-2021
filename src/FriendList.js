import { Link } from 'react-router-dom';
function FriendList(params) {
    return(
        <div>
            Friend List
            <Link to="/">
            <button>
                Go to Chatroom 
            </button>
        </Link>
        </div>
        
    )
};

export default FriendList;