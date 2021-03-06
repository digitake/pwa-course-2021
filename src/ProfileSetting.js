import {Link} from 'react-router-dom';
import prosetting from './desgin/Profile Setting (Light Mode).jpg'
import App from './App';

function ProfileSetting(){
    return(
        <App>
        <div>
            <h1>Profile Setting</h1>
            <img src={prosetting}></img>
        </div>
        </App>
    )
}

export default ProfileSetting;