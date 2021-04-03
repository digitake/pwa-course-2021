import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (
    
    <div className="App">
      <div className="App-header">

      <Link to="profile">
          <button>
          Go to profile
          </button>
        </Link>
        
        
        <Link to="/">
          <button>
            Chatbox
            </button>
            </Link>

       
        <Link to="friend-list">
          <button>
            Go to FriendList
           
          </button>
        </Link>
      </div>
        <div className="App-content">
          {children}
        
      

          </div>
          
  </div>
  )}
  export default App;