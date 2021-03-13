import './FriendList.css';
import App from './App';
import { Link } from "react-router-dom";


function FriendList(){
    return(
    <App>
        <div className="FriendList" >
            <div className= "FriendList-header">
               Friend List
            </div>
            <div className= "FriendList-boby">
                 สมชาย
                <div className= "profile-button">
                <Link to="/profile-page">
                     <img src = "profile-user-64.png" />
                </Link>
                </div>
                <div className= "Chat-Button">
                <Link to = "/" >
                     <img src = "buttonChat.png" />
                </Link>
                </div>
            </div>
            <div className= "FriendList-boby">
                 สมศรี
                <div className= "profile-button">
                <Link to="/profile-page">
                <img src = "profile-user-64.png"  />
                </Link>
                </div>
                <div className= "Chat-Button">
                <Link to = "/" >
                    <img src = "buttonChat.png" />
                </Link>
                </div>
            </div>
            <div className= "FriendList-boby">
                 สมศักดิ์
              <div className= "profile-button">
              <Link to="/profile-page">
                <img src = "profile-user-64.png"  />
              </Link>
            </div>
              <div className= "Chat-Button">
              <Link to = "/" >
                 <img src = "buttonChat.png" />
              </Link>
             </div>
            </div>
             <div className= "FriendList-black"> 
            </div>
        </div>
    </App>
    );
};

export default FriendList;