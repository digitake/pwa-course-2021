import './App.css';
import { Link } form 'react-router-dom';


function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
      <Link to="/friend-list">
          <button>
              Friend-list
          </button>
        </Link>

        <Link to="/profile">
          <button>
              Profile
          </button>
        </Link>

        <Link to="/chatbox">
          <button>
              Chatbox
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
