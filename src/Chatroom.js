import {Link} from 'react-router-dom'
import './AppMat.css'
import HomePage from './HomePage'

function Chatroom() {

return(

    
    <HomePage>
        <div>
            <Link to = "/Chat-Room" >
             <img src = "BotHelpChat.png" alt = "" />
                
            </Link>
        </div>
        
        
    </HomePage>
 
)
}
export default Chatroom;