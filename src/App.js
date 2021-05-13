import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">

        <Link to="addfriend">
          <button>
            Go to AddFriend
          </button>
        </Link>
        <Link to="friend">
          <button>
            Go to Friend
          </button>
        </Link>

        <Link to="profile">
          <button>
            Go to Profile
          </button>
        </Link>

        <Link to="/">
          <button>
            Go to Chatbox
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
