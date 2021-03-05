import { Link } from 'react-router-dom';

function FriendList() {
<<<<<<< HEAD
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
=======
 return(
    <div>
        Friend List
        <Link to ='/'>
            <bottom>
                Go chatroom
            </bottom>
        </Link>
    </div>
>>>>>>> 733aa0d578751e009adf73f4336f46f4041307da
    );
};

export default FriendList;