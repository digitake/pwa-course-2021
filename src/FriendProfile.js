import App from './App';
import './FriendProfile.css';
import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import profile from './profile.jpg'

function FriendProfile(){
    return(
        
        <App>
            <div class="friendProfile">
                <div class="friendProfile-box">
                    <Link to="/friend-list">
                        <img src={backButton}></img>
                    </Link>
                    <div class="friendProfile-detail">
                        <img src={profile}></img>
                    </div>
                </div>
            </div>
        </App>
    )
 };

 export default FriendProfile;