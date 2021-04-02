import './App.css';
import {Link} from 'react-router-dom';
import logo1 from './ChatIcon.png';
import logo2 from './ContactLogo.png';
import logo3 from './ProfileLogo.png';


function App({children}) {
  return (
    <div className="App col-6">
      <div className="App-header">
        <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
        <Link to="/Profile">
                  <img src={logo3}/>
              </Link>
        <Link to="/Chatbox">
                <img src={logo1}/>
        </Link>
      </div>
    <div className="App-Content">
    {children}
    </div>
    </div>
  )
  }

export default App;