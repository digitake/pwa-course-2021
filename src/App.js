import './App.css';
import { Link } from 'react-router-dom'


function App({children}) {
 

  return (
    <div className="App">
      
      <div className="App-header">

      <Link to = "/friend-list">
                
                <button>
                    friendlist
                </button>
      </Link>

      <Link to = "/profile">
                
                <button>
                    profile
                </button>
      </Link>
      
      </div>
      <Link to = "/">
                
                <button>
                    chatbox
                </button>
      </Link>
      <div className = "App-content">
      {children}
    </div>
      </div>
    
  );
}

export default App;