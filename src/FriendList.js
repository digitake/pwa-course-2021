import {Link} from "react-router-dom";

function FriendList() {
    return(
        <div>
            Friend List
            <Link to="/" className="Button">
                <button>
                    Go Chatroom
                </button>
            </Link>
        </div>
    );
};

export default FriendList;