import './App.css';
import { Link } from "react-router-dom";

function App({Children}) {

  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
          <button>
          friend-list
          </button>
        </Link>

        <Link to="/profile">
          <button>
          profile
          </button>
        </Link>

        <Link to="/chatbox">
          <button>
          chatbox
          </button>
        </Link>

      </div>
      <div className="App-content">
        {Children}
      </div>
    </div>
  );
}

export default App;
