import { Link } from 'react-router-dom';

function FriendList(){
    return(
        <div>
            Friend List
            <Link to="/PrivateChat">
                <button>
                    Go Chatroom
                </button>
            </Link>
        </div>
    );
};

export default FriendList;