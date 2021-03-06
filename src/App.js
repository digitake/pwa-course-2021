import './App.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Chatbox from './Chatbox';

function App() {
=======



function App({children}) {

>>>>>>> 4e0f9f9ea88b939112c7a13ec25f9c90f7009a14
  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
          <button>
          Friend List
          </button>
        </Link>
<<<<<<< HEAD
        </div>
      </div>

      <div className ="panel-footer"> 
      </div>

      <div className ="input-group">
      </div>

      <div className ="app-content">
      </div>
=======

        <Link to="/profile">
          <button>
          Profile
          </button>
        </Link>
        
        <Link to="/">
          <button>
          Chatbox
          </button>
        </Link>
        </div>
      <div className="App-content">
      {children}
      </div>
>>>>>>> 4e0f9f9ea88b939112c7a13ec25f9c90f7009a14
    </div>
  );
}


// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
