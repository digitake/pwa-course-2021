import './Profile.css';
import App from '../App';
import { Link } from "react-router-dom";


function Profile({children}){
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
             <Link to = "/Post">
               <button>
                  Post
               </button>
             </Link>

             <Link to = "/Image">
               <button>
                  Image
               </button>
             </Link>

             <Link to = "/Video">
               <button>
                  Video
               </button>
             </Link>
            </div>

        </div>

        <div className="Profile-content">
           {children}
        </div>

    </div>
    </App>
    );
};

export default Profile;