import './App.css';
import {Link} from 'react-router-dom';



function App ({Children}) {
  

  return (
    <div className="App">
      <div className="App-header">


        App Chatroom(ClassWork)
        <div className="App-textbox-send">
          
            <Link to="/friend-list">
            <button>
                Go to Friend list(Class Work)
            </button>
            </Link>

            <Link to="/profile">
            <button>
                Profile
            </button>
            </Link>

            <Link to="/">
            <button>
                Chat box
            </button>
            </Link>
       
        </div>
      <div className="App-content">
       {Children}
      </div>
             
        
      </div>
    </div>
  );
}

export default App;