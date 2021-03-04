import{Link} from 'react-router-dom';
import './App.css';
function FriendList(){
    return(
        <div className="App-chatroom-text ">
            FriendList(ClassWork)
      <div className="App-pic-right">   <Link to="/">
            <button>
                Go to Chatroom
            </button>
            </Link>
            </div> 
     <div>
     <Link to="/home">
            <button>
                Go to PrototypeAppChat
            </button>
            </Link>
     </div>


        </div>
    )
}
export default FriendList;