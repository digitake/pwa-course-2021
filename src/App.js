import './App.css';
import { Link } from 'react-router-dom';


function App({children}) {
 
  return (
    <div className="App">
      <div className="App-header">
            <Link to="/friend-list">
                <button>
                 Go FriendList
                </button>
             </Link>
             <Link to="/Profile">
             <button>
              Go Profile
            </button>
             </Link>
             <Link to="/App">
             <button>
              App
            </button>
             </Link>
             <Link to="/DarkChat">
             <button>
              DarkChat
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