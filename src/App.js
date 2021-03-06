import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-button">
                <Link to ="/insepect-profile">
                  <button>
                    Insepect Profile
                  </button>
                </Link>
                <Link to ="/profile-setting">
                  <button>
                    Profile Setting
                  </button>
                </Link>
        </div>
      </div>
      <div className="App-content">
      <Chatbox/>
      </div>
    </div>
  );
}

export default App;
