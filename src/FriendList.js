import { Link } from 'react-router-dom';
import inProfile from "./desgin/InsepectProfile.jpg";

function FriendList(){
    return(
        <div align="center">
            <h1>Insepect Profile</h1>
            <img src={inProfile} width="480" height="852"></img>
            <Link to ="/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
            <Link to ="/profile-setting">
                <button>
                Go to Profile Setting
                </button>
            </Link>
        </div>
    )
};

export default FriendList;