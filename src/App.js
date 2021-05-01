import './App.css';
import { Link } from 'react-router-dom'
import Friend from './Friend.png';
import profile from './icon profile.png';
import Group from './Group.png';

function App() {
 

  return (
    <div className="App">
      
      <div className="App-header">

      <Link to = "/friend-list">
                
                
                <img src= {Friend} width = "100" height = " 100" alt="เพื่อน" />
                
      </Link>

      <Link to = "/profile">
                
                <img src= {profile} width = "50" height = " 40" alt="โปร์ไฟล์" />

      </Link>

      <Link to = "/group">
                
                 <img src= {Group} width = "50" height = " 50" alt="กลุ่ม" />

      </Link>

      <Link to = "/chatbox">
                
                <button>
                    chatbox
                </button>
                
      </Link>
      </div>
      <div className = "App-content">

      


      
    </div>
      </div>
    
  );
}

export default App;