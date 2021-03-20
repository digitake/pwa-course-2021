import { Link } from 'react-router-dom'
import App from './App';
function FriendList(){
    return(
        <App>
        <div>
            Friend List
            <Link to = "/chatbox">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
        </App>
    )
}

export default FriendList