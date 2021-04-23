import './Profile.css';
import App from '../App';
import { Link } from "react-router-dom";


function Profile({children}){
    return(
    <App>
    <div className="Profile">

        <div className="Profile-background">
      
        </div>

        <div className="Profile-Box-Profile">

         <div className="Profile-coverPhoto">
         <img src ="Profile-img.png"/>
         </div>
         
         <h2>Rimuru Tempest</h2>
        </div>

        <div className="Profile-Box-Button">

             <Link to = "/Post">
             <button class="Profile-Button">โพสต์</button>
             </Link>

             <Link to = "/Friend">
             <button class="Profile-Button">เพื่อน</button>
             </Link>

             <Link to = "/Image">
             <button class="Profile-Button">รูปภาพ</button>
             </Link>

             <Link to = "/Video">
             <button class="Profile-Button">วีดีโอ</button>
             </Link>

        </div>

        <div className="Profile-content">
           {children}
        </div>

    </div>
    </App>
    );
};

export default Profile;