import './App.css';
import { Link } from 'react-router-dom';

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
      
    </div>
    
  );
}

export default App;
