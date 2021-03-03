import { Link } from 'react-router-dom';

function FriendList() {
    return (
    <div>
        Friend List
        <Link to="/chat-room">
            //แก้เป็นอย่างอื่นได้<button>
                Go Chatroom
            </button>
        </Link>
    </div>
    );
};

export default FriendList;