import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
      <Link to="chatbox">
          <button>
          Chat
          </button>
        </Link>

        <Link to="/">
          <button>
          Home
          </button>
        </Link>

        <Link to="friendlist">
          <button>
            Chen
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