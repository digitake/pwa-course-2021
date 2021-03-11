import './Profile.css';
import App from './App';
import { Link } from "react-router-dom";


function Profile(){
    return(
    <App>
    <div className="Profile">

        <div className="Profile-background">
      
        </div>

        <div className="Profile-coverPhoto">
            <div className="Profile-Profilephoto">
      
            </div>
        </div>

        <div className="Profile-header">
            <div className="Profile-room-Button">
             <Link to = "/Image">
               <image>
               <img src ="buttonChat.png"/>
               </image>
             </Link>
            </div>

        </div>

        <div className="Profile-chatroom">
           Name Surname
        </div>

    </div>
    </App>
    );
};

export default Profile;