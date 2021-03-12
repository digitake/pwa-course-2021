import './FriendList.css';
import { Link } from 'react-router-dom';

function FriendList() {
    
    return (
       <div className = "FriendList">
             <div className = "FriendList-header">
             </div>
        <div className = "FriendList-chatroom">
        <div className = "FriendList-Main">
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
        </div>
        </div>
        </div>




    );
};

export default FriendList;