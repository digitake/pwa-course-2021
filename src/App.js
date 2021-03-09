
import './App.css';
import {Children} from 'react';
import {Link} from 'react-router-dom';


function App({children}) {


  return (
    <div className="App col-12">
      <div className="App-header">
      <Link to="/friend-list" className="App-header-button">
                <button>
                    Go Friend-list
                </button>
            </Link>
            <Link to="/support-list" className="App-header-button">
                <button>
                    Go support-list
                </button>
            </Link>
            <Link to="/chatbox" className="App-header-button">
                <button>
                    Go chatbox
                </button>
            </Link>
      </div>     
      <div className="App-content">
        {children}
      </div>
    </div>
  );
}

export default App;
