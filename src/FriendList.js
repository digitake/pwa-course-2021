import { Link } from 'react-router-dom'
import App from './App';
import dog from './dog.PNG';
function FriendList(){
    return(
        <App>
        <div>
            Friend List
            <Link to = "/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
        </App>
    )
}

export default FriendList