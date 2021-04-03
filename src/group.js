import { Link } from 'react-router-dom'
import App from './App';
function group(){
    return(
        <App>
        <div>
            Group
            <Link to = "/chatbox">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
        </App>
    )
}

export default group