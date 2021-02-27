import { Link } from 'react-router-dom'
function Profile(){
    return(
        <div>
            Profile
            <Link to = "/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
    )
}

export default Profile