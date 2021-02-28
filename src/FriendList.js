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
          <Link to="/home">
            <button>
             Go to home
             </button>
          </Link>
          <Link to="/doc-work">
            <button>
             Go to Document Work
             </button>
          </Link>
          <Link to="/photo-list">
            <button>
             Go to Photo-List
             </button>
          </Link>
          <Link to="/cradit">
            <button>
             Go to cradit
            </button>
          </Link>
            
        </div>
      </div>
        
    )
    
};

export default FriendList;