import './App.css';
import{Link} from 'react-router-dom'
function  FriendList() {
    return(
      <div className="Friend">
        <div className="Friend-header">
             My Friend List
        </div>
        <div className="Friend-chatroom">
          <div className="Friend-chatroom-text">
             Lion
          </div>
          <div className="Friend-chatroom-text">
             Tiger 
          </div>
          <div className="Friend-chatroom-text">
             Cat
          </div>
          <div className="Friend-chatroom-text">
             Hayina
          </div>
          <Link to="/">
            <button>
             Go to Chatroom
             </button>
            </Link>
        </div>
      </div>
        
    )
    
};

export default FriendList;