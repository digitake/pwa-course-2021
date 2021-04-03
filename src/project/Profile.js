import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className="fullscreen-profile">

            <div className="header-profile">

            </div>

            <div className="content-profile">

                <div className="boxchatlogo-profile">
                    <img src="/Project/Prologin/boxchat.jpg" alt="/Project/Prologin/boxchat.jpg" 
                    width="120px" height="70px" />
                </div>

                <div className="bg-profile">
                    <img src="/Project/Profile/k2.png" alt="/Project/Profile/k2.png" 
                    width="500px" height="790px" />
                </div>

                <div className="bgprofile-wall">
                    <img src="/Project/Profile/k3.png" alt="/Project/Profile/k3.png" 
                    width="300px" height="300px" />
                </div>

                <div className="profile-wall">
                    <img src="/Project/Profile/k1.png" alt="/Project/Profile/k1.png" 
                    width="270px" height="270px" />
                </div>

                <div className="setting-profile">
                    <img src="/Project/Profile/k5.png" alt="/Project/Profile/k5.png" 
                    width="50px" height="50px" />
                </div>

                <div className="back-profile">
                    <img src="/Project/Profile/k6.png" alt="/Project/Profile/k6.png" 
                    width="40px" height="40px" />
                </div>

                <input type="PRname" id="Uname" name="username" placeholder="Your Username..."/>
                
                <input type="bioP" id="Bname" name="bioprofile" placeholder="Your profile..."/>

            </div>

            <div className="footer-profile">

            </div>

        </div>

    );
} 

export default Profile;