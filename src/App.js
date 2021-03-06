import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {

  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
          <button>
          Friend List
          </button>
        </Link>
        </div>
      <div className="App-content">
      </div>
    </div>
    
  );
}


// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
