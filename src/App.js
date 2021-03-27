import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {


  return (

    <div className="App">

      <div className="App-header">
    
      </div>
<<<<<<< HEAD
      {children}
=======

     
      {children}


>>>>>>> e68f13f2c2fa4ae4df83fe29c8ef748d600d0ffe
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