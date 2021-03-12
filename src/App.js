import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
              <Link to="friend-list">
                    <button>
                         Friendlist
                    </button>
              </Link>
              
              <Link to="Profile">
                    <button>
                         Profile
                    </button>
              </Link>

              <Link to="/">
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
