import {Link} from 'react-router-dom';
import prosetting from './design/Profile Setting (Light Mode).jpg'

function ProfileSetting(){
    return(
        <div align="center">
            <h1>Profile Setting</h1>
            <img src={prosetting} width="480" height="852"></img>
            <Link to="/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
            <Link to="/insepect-profile">
                <button>
                    Go to Insepect Profile
                </button>
            </Link>
        </div>
    )
}

export default ProfileSetting;