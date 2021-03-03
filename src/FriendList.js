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
            <div className= "FriendList-header2">
                 สมชาย
                 <Link to="/">
                     <img src = "profile-user-64.png" align="Left" />
                 </Link>
            </div>
            <div className= "FriendList-header3">
                 สมศรี
                 <Link to="/">
                <img src = "profile-user-64.png"  align= "Left"/>
                </Link>
            </div>
            <div className= "FriendList-header4">
                 สมศักดิ์
                 <Link to="/">
                <img src = "profile-user-64.png"  align= "Left"/>
                </Link>
            </div>


            <div className= "FriendList-chatroom">
                
            </div>
        </div>


    );
};

export default FriendList;