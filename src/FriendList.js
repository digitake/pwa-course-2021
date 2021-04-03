import { Link } from 'react-router-dom';

function FriendList() {
    return (
        <div>
            FriendList
            <Link to="/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
    )
};

export default FriendList;