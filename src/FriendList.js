import { Link } from 'react-router-dom';
import App from './App';
import Chatbox from './Chatbox'

function FriendList() {
    return (
        <App>
        <div>
            <div>Friend List</div>
            <Link to="/friend-list">
                <button>
                    Go to Chatbox
                </button>
            </Link>
        </div>
        </App>
    )
};

export default FriendList;