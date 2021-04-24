import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {
  return (
    <div className="App">
      <div className="App-header"> 
      <Link to="/"> <div className="App-back-icon"> <i class="fas fa-chevron-circle-left"></i> </div> </Link>
      <div className="App-letters">Chat</div>
      </div>

      <div className="App-content">
        {children}
      </div>
      
    </div>
  );
}

export default App;
