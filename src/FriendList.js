import { Link } from 'react-router-dom';
import App from './App';

function FriendList(){
    return(
        <App>
        <div className="App-FriendList">
            Friend List
            <Link to="/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
        </App>
    );
};

export default FriendList;