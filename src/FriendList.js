import { Link } from 'react-router-dom';

function FriendList() {
    
    return (
        <div>
            Friend List
            <Link to="/">
                <button>
                    Go Chatroom
                </button>
            </Link>
            <div>
                <Link to="/Profile">
                    <button>
                        Go Profile
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default FriendList;