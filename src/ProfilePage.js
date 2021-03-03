
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

    );
};

export default ProfilePage;