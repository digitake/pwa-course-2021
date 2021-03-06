import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox'

function App() {

  return (
    <div className="App">
      <div className="App-header">
        Chatroom
      </div>
      <Link to="/friend-list">
        <button>
        FriendList
        </button>
      </Link>
      <Chatbox/>
      
    </div>
    
  );
}

export default App;
