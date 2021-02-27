import {Link} from 'react-router-dom';

function FriendList(){
    return(
        <div>
            Friend List
            <Link to="/">
                <button>
                    Go Chatroom
                </button>
                <img src="origin.png"/>
            </Link>
        </div>
    );
};

export default FriendList;