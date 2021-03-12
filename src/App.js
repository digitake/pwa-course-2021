import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {

  return (
    <div className="App">
      <div className="App-header"> <Link to="/"> <div className="App-back-icon"> <i class="fas fa-chevron-circle-left"></i> </div> </Link>
      Receiver's Name  
      </div>
        <div className="App-content">
          <Chatbox />
        </div>
    </div>
  );
}

export default App;
