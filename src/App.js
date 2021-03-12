import './App.css';
import {Link} from 'react-router-dom';
import Chatbox from './Chatbox';

function App(children) {
  return (
    <div className="App col-6">
      <div className="App-header">
      <Link to="/friend-list">
                <botton>
                    Go to Friendlist
                </botton>
            </Link>
      </div>
      <div className="App-content">
        <Chatbox />
        {children}
      </div>
    </div>
  );
}

export default App;
