import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className ="fullscreen-profile">

            <div className ="herder-profile">
                
            </div>

            <div className ="content-profile">

                <div className ="bg-profile">
                    <img src ="/Project/Profile/k2.png" alt ="/Project/Profile/k2.png" 
                    width ="590px" height ="840px" />
                </div>

                <div className ="bg-wall-profile">
                    <img src ="/Project/Profile/k3.png" alt ="/Project/Profile/k3.png"
                    width ="400px" />
                </div>

                <div className ="wall-profile">
                    <img src ="/Project/Profile/k1.png" alt ="/Project/Profile/k1.png"
                    width ="370px" />
                </div>

                <div className ="setting-profile">
                    <img src ="/Project/Profile/k5.png" alt ="/Project/Profile/k5.png"
                    width ="70px" />
                </div>

                <input type="US-profile" id="Usnameprofile" name="username-profile" placeholder="Ayame"/>

                <input type="PS-profile" id="Personaprofile" name="Persona-profile" placeholder="Your Profile..."/>

            </div>

            <div className ="fotter-profile">

            </div>

        </div>
    );
} 

export default Profile;