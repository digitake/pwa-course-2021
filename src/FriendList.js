import './FriendList.css';
import { Link } from "react-router-dom";
import App from './App';

function FriendList(){
    return(
        <App>
        <div className="FriendList" >
            <div className= "FriendList-header">
               Friend List
              <Link to="/">
                  <img src ="back-32.png" align="Left" />
              </Link>
            </div>
            <div className= "FriendList-header2">
                 สมชาย
                 <Link to="/profile-page">
                     <img src = "profile-user-64.png"  />
                 </Link>
                 <div className= "Chat-Button">
                    <Link to = "/" >
                     <button>
                     Chat  
                     </button>
                    </Link>
                </div>
            </div>
            <div className= "FriendList-header3">
                 สมศรี
                 <Link to="/profile-page">
                <img src = "profile-user-64.png"  />
                </Link>
                <div className= "Chat-Button">
                    <Link to = "/" >
                     <button>
                     Chat  
                     </button>
                    </Link>
                </div>
            </div>
            <div className= "FriendList-header4">
                 สมศักดิ์
                 <Link to="/profile-page">
                <img src = "profile-user-64.png"  />
                </Link>
                <div className= "Chat-Button">
                    <Link to = "/" >
                     <button>
                     Chat  
                     </button>
                    </Link>
                </div>
            </div>
            <div className= "FriendList-chatroom"> 
            </div>
        </div>
        </App>
    );
};

export default FriendList;