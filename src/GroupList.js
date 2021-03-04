import{Link} from 'react-router-dom';
import './App.css';
function GroupList() {
    return(
<div>
<div className="App-login-head">
PAP GroupList
</div>
   
   <div>

   </div>
   
   <div className="App-PapFriendList-body">

<Link to="/group-chat">
            <button>
                Group1
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group2
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group3
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group4
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group5
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group6
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
  
      
  
   <Link to="/group-chat">
            <button>
            Group7
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group8
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/group-chat">
            <button>
            Group9
            </button>
            </Link>
   </div>
   <div className="App-PapFriendList-body">
   <Link to="/home">
            <button>
                Home
            </button>
            </Link>

   </div>
   </div>
   )
   
}
export default GroupList;