import { Link } from 'react-router-dom'
import App from './App';
function FriendList(){
    return(
        <App>
        <div>
        <div className="App-header">
            
            <Link to = "/chatbox">
                <button> 
                    back 
                </button> 
            </Link>
            
            </div>
        </div>
        </App>
    )
}

export default FriendList
