
import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox'

function App() {




  return (
    <div className="App">
      <div className="App-header ">
        <Link to="/friend-list">
            <button>
                Friend List
            </button>
        </Link>
        <Link to ="/profile1">
          <button>
            Profile
          </button>
        </Link>
      </div>
      <div className="App-content">
        <Chatbox />
      </div>
    </div>
    
  );
}

export default App;
