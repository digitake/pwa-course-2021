import { Link } from 'react-router-dom';
import App from './App';

function FriendList() {
    return(
        <App>
        <div>
            FriendList
            <Link to="/">
                <button>
                    Goto Chatroom
                </button>
            </Link>
        </div>
        </App>
    );
};

export default FriendList;