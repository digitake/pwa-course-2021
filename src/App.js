import './App.css';
import { Link } from 'react-router-dom';


function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
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
                <Link to ="/friend-list">
                  <button>
                    FriendList 
                  </button>
                </Link>
                <Link to="/">
                  <button>
                    Chatroom
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
