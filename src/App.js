import { Link } from 'react-router-dom';
import './App.css';
import FriendList from './FriendList';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
        <Link to="friend-list">
          <button>
            Go to FriendList
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
