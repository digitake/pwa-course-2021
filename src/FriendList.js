import { Link } from 'react-router-dom';
import App from './App'

function FriendList(params) {
    return(
        <App>
        <div>
            <div>Friend List</div>
            <Link to="/">
                go back
        </Link>
        
        </div>
    
        </App>
    
    )
};

export default FriendList;