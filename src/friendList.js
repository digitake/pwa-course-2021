import './App.css';
import{Link} from 'react-router-dom'
function  FriendList() {
    return(
      <div className="Friend">
        <div className="Friend-header">
        Cat Chat
        </div>
        <div className="Friend-chatroom">
          <div className="Friend-chatroom-text">
             Hello Welcome!!
          </div>
          <div className="Friend-chatroom-text">
            ( This is a cat chat ) 
          </div>
          <div className="Friend-chatroom-text">
            Only cat can chat it 
          </div>
          <div className="Friend-chatroom-text">
            Good Luck Meaow ^^ 
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