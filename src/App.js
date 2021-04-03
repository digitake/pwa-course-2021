import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {


  return (

    <div className="App">

      <div className="App-header">
        เราเตอร์หลักอยู่ที่ /random-main
    
      </div>

     
      {children}


      <div>
        <Link to="/friend-list">
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