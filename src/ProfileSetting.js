import { Link } from 'react-router-dom';
import prosetting from './design/Profile Setting (Light Mode).jpg'

function ProfileSetting() {
    return (
        <div align="center">
            <Link to="/home">
                <img src={prosetting} width="480" height="852"></img>
            </Link>
        </div>
        </App>
    )
}

export default ProfileSetting;