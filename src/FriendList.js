import { Link } from 'react-router-dom'
import dog from './dog.PNG';
function FriendList(){
    return(
        <div>
            Friend List
            <Link to = "/">
                <img src= {dog} alt="รูปหมา"/>
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
        
    )
}

export default FriendList