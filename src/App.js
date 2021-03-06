import './App.css';
import {Link} from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Link to="/friend-list">
                <botton>
                    Go to Friendlist
                </botton>
            </Link>
      </div>
    <div className="App-Content">
    <Chatbox />
    </div>
    </div>
  );
}

export default App;
