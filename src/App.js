import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (

   
  <div> 
    className="App"
    className="App-header"
  </div>
  
   );

    <div className="App">
      <div className="App-header">

        <Link to="friend-list">
          <button>
            Go to FriendList
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
          <div className="App-content">
            {children}

    </div>
  );

}

export default App;
