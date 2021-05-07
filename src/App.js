import './App.css';
import {Link} from 'react-router-dom';
import logo1 from './ChatIcon.png';
import logo2 from './ContactLogo.png';
import logo3 from './PaintIcon.png';

function App({children}) {
  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list" className="App-header-button">
                <img src={logo2}/>
              </Link>
        <Link to="/Profile" className="App-header-button">
                  <img src={logo3}/>
              </Link>
        <Link to="/Chatbox" className="App-header-button">
                <img src={logo1}/>
        </Link>
        <Link to="/PageDrawing">
                <img src={logo3}/>
              </Link>
      </div>
    <div className="App-Content">
    {children}
    </div>
    </div>
  );
}

export default App;
