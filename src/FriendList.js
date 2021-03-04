import './FriendList.css';
import { Link } from "react-router-dom";

function FriendList(){
    return(
        <div className="FriendList" >
            <div className= "FriendList-header">
               Friend List
              <Link to="/">
<<<<<<< HEAD
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
=======
                  <img src ="back-32.png" align= "Left" />
              </Link>
            </div>
            <div className= "FriendList-header2">
                
            </div>
            <div className= "FriendList-chatroom">
                
>>>>>>> d48959107dc773950f219abbd3b5b70cd21ee2b7
            </div>
        </div>


    );
};

export default FriendList;