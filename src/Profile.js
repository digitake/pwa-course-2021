import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            Profile
            <Link to="/">
                <button>
                    Go Chatroom
                </button>
            </Link>
            <div>
                <Link to="/friend-list">
                    <button>
                        Go FriendList
                    </button>
                </Link>
            </div>
        </div>
        
    );
};

export default Profile;