import {Link} from 'react-router-dom';

// ใช้<img src={}> แทนbottonได้  ** ระหว่างlink ** //
function FriendList() {
    return(
        <div>
            Friend List
            
            <Link to ="/">
                 <botton>
                     Go to chatroom
                 </botton>
            </Link>
        </div>
    )
    
};

export default FriendList;