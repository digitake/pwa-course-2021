import {Link} from 'react-router-dom'
import HomePage from './HomePage'


function GroupChatRoom() {
return(
    <HomePage>
        <div>
            <Link to = "/Chat-Room" >
             <img src = "ButtonGroupChat.png" alt = "" />
            </Link>
        </div>
    </HomePage>
    
)  
}

export default GroupChatRoom;