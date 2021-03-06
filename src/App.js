import './App.css';
import { Link } from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App col-6">
      <div className="App-header">
      <div>
        <Link to="/">
            <img src="back"  alt="ย้อนกลับ"/>
        </Link>
        </div>
      </div>

      <div className ="panel-footer"> 
      </div>

      <div className ="input-group">
      </div>

      <div className ="app-content">
      </div>
    </div>
  );
}


// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
