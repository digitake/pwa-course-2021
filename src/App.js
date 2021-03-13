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
            friendList
          </button>
        </Link>
      </div>
      <div className="App-content">
      <Link to="/Chatbox">
          <button>
            Chatbox
          </button>
        </Link>
      </div>
      {children}
      </div>
      
  )}

export default App;
  