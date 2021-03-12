import {Link} from 'react-router-dom';
import App from './App'

// ใช้<img src={}> แทนbottonได้  ** ระหว่างlink ** //
function FriendList() {
    return(
        <App>
        <div className = "FriendList-drawbox"></div>
        <div>
            Friend List
            <Link to ="/">
                 <botton>
                     Go to chatroom
                 </botton>
            </Link>
        </div>
        
        </App>
    )
    
};

export default FriendList;