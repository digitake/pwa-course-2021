
import { Link } from "react-router-dom";

function ProfilePage(){
    return(
        <div>
            Profile Page
            <Link to="/">
              <button>
                  Back
               </button>
            </Link>
        </div>

    );
};

export default ProfilePage;