import {Link} from 'react-router-dom'
import HomePage from './HomePage'

function Chatroom() {

return(

    
    <HomePage>
        <div>
            <Link to = "/privatechat" >
             <img src = "BotHelpChat.png" alt = "" />
            </Link>
        </div>
        
    </HomePage>
 
)
}
export default Chatroom;