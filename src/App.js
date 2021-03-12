import { Link } from 'react-router-dom';
import './App.css'
import FriendList from './FriendList';

function App({children}) {
   
  return (
    <div className="App">
      <div className="App-header">


        <Link to="/friend-list">
          <button>
              FriendList
          </button>
        </Link>

        <Link to="/Home">
          <button>
              Home
          </button>
        </Link>

        <Link to="/">
          <button>
              Chat
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
