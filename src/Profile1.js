import { Link } from 'react-router-dom';
import App from './App';
import './Profile1.css';

function Profile1(params) {
    return(
        <App>
        <div className = "App">
            <div className = "App-content">
                <Link to="/">
                <button>
                    Go to Chatroom 
                </button>
            </Link>
            </div>
            Profile
            
        </div>
        </App>
    )
}

export default Profile1;