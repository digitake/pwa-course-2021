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
                  VIP Live
                </div>
                <div className="Friend-chatroom-text">
                  Lion 
                </div>
                <div className="Friend-chatroom-text">
                  Cat 
                </div>
                <div className="Friend-chatroom-text">
                  Fisher Man 
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