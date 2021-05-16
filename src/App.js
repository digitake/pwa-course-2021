import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {

  return (

    <div className="App">
      <div className="App-content">
          {children}


          </div>


      <div className="App-header">
        
      <Link to="chatbox">
        <p>
          <img src="chatlogo.png" width="30%" height="50%"/>
          </p>   
        </Link>

        <Link to="main">
        <p>
          <img src="homelogo.png" width="30%" height="50%"/>
          </p>   
        </Link>

        <Link to="friend">
        <p>
          <img src="friendlogo.png" width="30%" height="50%"/>
          </p>   
        </Link>

        <Link to="friendlist">
        <p>
          <img src="userlogo.png" width="30%" height="50%"/>
          </p>

        </Link>

      </div>
        

    </div>
  );
}


export default App;

