
import { Link } from "react-router-dom";

function FriendList(){
    return(
        <div>
            <div className="App-header App-logo ">

            </div> 
            Friend List
            <Link to="/">
              <button>
                  Back
               </button>
            </Link>
        </div>

    );
};

export default FriendList;