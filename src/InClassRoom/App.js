import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
            <Link to="/friend" className="Button">
                <button>
                  Friend
                </button>
            </Link>

            <Link to="/Profile" className="Button">
                <button>
                  Profile
                </button>
            </Link>

            <Link to="/Chatbox" className="Button">
                <button>
                  chatbox
                </button>
            </Link>
      </div>
      <div className ="App-content">
        {children}
      </div>
    </div>
  );
}

export default App;
