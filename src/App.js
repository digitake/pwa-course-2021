import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';
import FriendList from './FriendList';

function App() {
 
  return (
    <div className="App">
      <div className="App-header">
            <Link to="/friend-list">
                <button>
                 Go FriendList
                </button>
             </Link>
             <Link to="/Profile">
             <button>
              Go Profile
            </button>
             </Link>
         </div>
      <div className ="App-content">
        <Chatbox />
    </div>
    </div>
  );
}

export default App;
