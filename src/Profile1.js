import { Link } from 'react-router-dom';

function Profile1(params) {
    return(
        <div>
            Profile
            <Link to="/">
                <button>
                    Go to Chatroom 
                </button>
            </Link>
        </div>
    )
}

export default Profile1;