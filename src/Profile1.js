import { Link } from 'react-router-dom';
import App from './App';


function Profile1(params) {
    return(
        <App>
        <div className >
            Profile
            <Link to="/">
                <button>
                    Go to Chatroom 
                </button>
            </Link>
        </div>
        </App>
    )
}

export default Profile1;