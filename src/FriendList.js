import './FriendList.css';
import { Link } from "react-router-dom";

function FriendList(){
    return(
        <div className="FriendList" >
            <div className= "FriendList-header">
               Friend List
              <Link to="/">
                  <img src ="back-32.png" align="Left" />
              </Link>
            </div>
            <div className= "FriendList-boby">
                 สมชาย
                 <Link to="/profile-page">
                     <img src = "profile-user-64.png"  />
                 </Link>
                 <div className= "Chat-Button">
                    <Link to = "/" >
                     <img src = "buttonChat.png" />
                    </Link>
                </div>
            </div>
            <div className= "FriendList-boby2">
                 สมศรี
                 <Link to="/profile-page">
                <img src = "profile-user-64.png"  />
                </Link>
                <div className= "Chat-Button">
                    <Link to = "/" >
                    <img src = "buttonChat.png" />
                    </Link>
                </div>
            </div>
            <div className= "FriendList-boby3">
                 สมศักดิ์
                 <Link to="/profile-page">
                <img src = "profile-user-64.png"  />
                </Link>
                <div className= "Chat-Button">
                    <Link to = "/" >
                    <img src = "buttonChat.png" />
                    </Link>
                </div>
            </div>
            <div className= "FriendList-black"> 
            </div>
        </div>


    );
};

export default FriendList;