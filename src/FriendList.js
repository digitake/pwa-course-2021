import {Link} from "react-router-dom";

function FriendList(){
    return(
        <div>
            Friend List
            <Link to="/">
                <button>
                    Go to Main
                </button>
                
                <img src="pruekProfile.jpg"/>
            </Link>
        </div>
    );
};

export default FriendList;