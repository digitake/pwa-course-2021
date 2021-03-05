import './Profile.css';
import { Link } from "react-router-dom";

function ProfilePage(){
    return(
        <div>
            Profile Page
            <Link to="/friend-list">
              <button>
                  Back
               </button>
            </Link>
        </div>

        <div className="Profile-chatroom">
           Name Surname
        </div>

           

    </div>

    );
};

export default ProfilePage;