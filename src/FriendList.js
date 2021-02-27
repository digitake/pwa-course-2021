import './App.css';
import{Link} from 'react-router-dom'
function  FriendList() {
    return(
        <div className="App-chatroom">
        <div className="App-header">
          My Friend List :
        </div>
        <div className="App-chatroom-text">
          Lion 
        </div>
        <div className="App-chatroom-text">
          Cat 
        </div>
        <div className="App-chatroom-text">
          Fisher Man 
        </div>
        <Link to="/">
            <button>
                Go to Chatroom
                </button>
            </Link>
        </div>
    )
    
};

export default FriendList;