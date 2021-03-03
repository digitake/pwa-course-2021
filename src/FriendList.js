import './FriendList.css';
import { Link } from "react-router-dom";

function FriendList(){
    return(
        <div className="FriendList">
            <div className= "FriendList-header">
               Friend List
              <Link to="/">
                     <img src ="back-32.png"/>
               <button>
                   Back
                </button>
              </Link>
            </div>
            <div className= "FriendList-chatroom">

            </div>
            <div className ="FriendList-chatroom-text">

            </div>
        </div>


    );
};

export default FriendList;