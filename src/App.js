import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
        Chatroom
      <Link to="/friend-list">
        <button>
        FriendList
        </button>
      </Link>
      </div>
      <div className="App-content">
        {children}
      </div>
    </div>
    
  );
}

export default App;
