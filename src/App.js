import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
      <Link to="chatbox">
          <button>
          Go to Chatbox
          </button>
        </Link>

        <Link to="/">
          <button>
          Go to Home
          </button>
        </Link>

        <Link to="friendlist">
          <button>
            Go to chen
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