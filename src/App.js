import './App.css';
import { Link } from 'react-router-dom';
import back from './image/back.png' ; 
import './Chatbox'

function App({Children}) {
 
  return (
    <div className="App col-6">
      <div className="App-header">
      <div>
      <Link to="Chatroom">
          <img src={back} width="50" border="5" alt="ย้อนกลับ">
          </img>
        </Link>
        
        <Link to="/MainPage">
            <button>
              Main Page
              </button>
        </Link>
        <Link to ="/Addfriend">
          <button>
            AddFriend
          </button>
          </Link>
          <Link to ="/">
          <button>
            Chatroom
          </button>
          </Link>
          
        
      </div>
      </div>
     
     <div className="App-content">
       {Children}
       </div>
    </div>
    
  );
}


// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
