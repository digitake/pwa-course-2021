import './App.css';
import Chatbox from './Chatbox';

import{Link} from 'react-router-dom';

function App({children}) {
  

  return (
    <div className="App">
      <div className="App-header">


        App Chatroom(ClassWork)
        <div className="App-textbox-send">
          
            <Link to="/friend-list">
            <button>
                Friend list(Class Work)
            </button>
            </Link>
            <Link to="/home">
            <button>
               PrototypeAppChat
            </button>
            </Link>

            <Link to="/Profile">
            <button>
                Profile
            </button>
            </Link>
            
        </div>
      </div>
     <div className="App-content">
    
    {children} 
     </div>
    </div>
  );
}

export default App;