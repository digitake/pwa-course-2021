import './App.css';
import Chatbox from './Chatbox';
import{Link} from 'react-router-dom';



function HeadOfApp({children}) {
  

  return (
    <div className="App">
    <div className="App-header">


     
      <div className="App-header-public">
        
          <Link to="/home">
          <button>
             Home
          </button>
          </Link>
          <Link to="/pap-friendList">
          <button>
            Friend List
          </button>
          </Link>

          <Link to="/group-List">
          <button>
              Group List
          </button>
          </Link>
          <Link to="/Store">
          <button>
             Store
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

export default HeadOfApp;