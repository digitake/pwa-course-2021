import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {


  return (
    <div className="App">
      <div className="App-header">
      </div> 
    <div>
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
      <div className="App-content">
        {children}
      </div>
    </div>
        
  );
}

export default App;
