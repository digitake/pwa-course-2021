import './App.css';
import { Link } from 'react-router-dom';
import Home from './cool4.png';

function App({children}) {
  return (
    <div className="App ">
      <div className="App-header ">
      <Link to ="/">
          <button>
            <img src = {Home} alt= "" width = "75" height = "75"></img>
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
