import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    return (
    <div className="Profile">
             <header className="Main-BackGround">
                <img className="Main-BackGrounder" src="/Project/Profile/k2.png" alt = "/Project/Profile/k2.png" />
             </header>
        <div>
            <img className="Sub-Profile" src="/Project/Profile/k3.png" alt = "/Project/Profile/k3.png" />
        </div>
        <div>
            <img className="Main-Profile" src="/Project/Profile/k1.png" alt = "/Project/Profile/k1.png" />
        </div>
        <div>
            <img className="namely" src="/Project/Profile/k4.png" alt = "/Project/Profile/k4.png" />
        </div>
        <p className="usernamely">username</p> 
        <div>
            <Link to="/Profriend">
            <img className="GoGoBack" src="/Project/Profile/k6.png" alt = "/Project/Profile/k6.png" />
            </Link>
        </div>
        <div>
            <Link to="/Prosetting">
            <img className="GoSetting" src="/Project/Profile/k5.png" alt = "/Project/Profile/k5.png" />
            </Link>
        </div>
    </div>
    
    );
} 

export default Profile;