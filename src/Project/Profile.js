import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    return (
    <div className="Profile">
             <header className="Main-BackGround">
                <img className="Main-BackGrounder" src="/Photo/k2.png" alt = "/Photo/k2.png" />
             </header>
        <div>
            <img className="Sub-Profile" src="/Photo/k3.png" alt = "/Photo/k3.png" />
        </div>
        <div>
            <img className="Main-Profile" src="/Photo/k1.png" alt = "/Photo/k1.png" />
        </div>
        <div>
            <img className="namely" src="/Photo/k4.png" alt = "/Photo/k4.png" />
        </div>
        <p className="usernamely">username</p> 
        <div>
            <Link to="/">
            <img className="GoGoBack" src="/Photo/k6.png" alt = "/Photo/k6.png" />
            </Link>
        </div>
        <div>
            <Link to="/">
            <img className="GoSetting" src="/Photo/k5.png" alt = "/Photo/k5.png" />
            </Link>
        </div>
    </div>
    
    );
} 

export default Profile;