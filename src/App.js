import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {


  return (

    <div className="App">

      <div className="App-header">
    
      </div>

      <div className="App-content">
      {children}
      </div>

      <div>
        <Link to="/Chatbox">
                <button>
                    Go Chatroom
                </button>
         </Link>

        <Link to="/chatbox-test">
                <button>
                    Go Chatbox Test
                </button>
        </Link>
        
        </div>

    </div>
    
  );
}
export default App;