import { Link } from 'react-router-dom';

function FriendList() {
    return(
        <div>
            FriendList
            <Link to="/">
                <button>
                    GoChatRoom
                </button>
            </Link>     
        </div>
        
    );
};

export default FriendList;