import './FriendList.css';
import { Link } from "react-router-dom";

function FriendList(){
    return(
        <div className="FriendList" >
            <div className= "FriendList-header">
               Friend List
              <Link to="/">
                  <img src ="back-32.png" align= "Left" />
              </Link>
            </div>
            <div className= "FriendList-header2">
                
            </div>
            <div className= "FriendList-chatroom">
                
            </div>
        </div>


    );
};

export default FriendList;