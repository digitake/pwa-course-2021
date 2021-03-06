import {Link} from 'react-router-dom';
import App from './App';

function Profile(){
    return(
        <App>
            <div>
                <h1>Profile</h1>
                    <Link to="/">
                        <button>
                            Go to Chatroom
                        </button>
                    </Link>
            </div>
        </App>
    )
}

export default Profile;