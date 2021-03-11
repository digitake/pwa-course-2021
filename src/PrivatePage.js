import {Link} from 'react-router-dom'
import HomePage from './HomePage'


function PrivatePage() {
return(
    <HomePage>
        <div>
            <Link to = "/Chat-Room" >
             <img src = "ButtonPrivateGroupChat.png" alt = "" />
            </Link>
        </div> 
    </HomePage>
    

)  
}

export default PrivatePage;