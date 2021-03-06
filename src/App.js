import './App.css';
import {Link} from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {
  return (

    <div className = "App">
      <div className="App-header">
        <div>
         <Link to="/friend-list">
                <button>
                    Go Chatroom
                </button>
         </Link>

         <Link to="/AllChat">
                <button>
                    Go All-Chat
                </button>
         </Link>
        </div> 
      </div>
      
      <div className="App-chatroom">
           <Chatbox/>
         </div>
    </div>
    
  );
}
export default App;