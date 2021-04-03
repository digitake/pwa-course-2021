import{Link} from 'react-router-dom';
import './App.css';
import App from './App';


function FriendList(){
    return(
        <App>
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
        </App>
    )
}
export default FriendList;