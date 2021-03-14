
import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';



function App({children}) {

  return (
    <div className="App">
      <div className="App-header">

        <Link to="/friend-list">
          <button>
           Go to friendList
          </button>
        </Link>
  
      <Link to="/Chatbox">
          <button>
            Chatbox
          </button>
        </Link>
        </div>
      <Link to="/Home">
          <button>
            Home
          </button>
        </Link>
        
        <Link to="profile">
          <button>
           Profile
          </button>
        </Link>
        
      </div>)
  
      {children}
   
      
  



  
  
}


export default App;
