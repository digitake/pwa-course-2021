import './App.css';
import { Link } from 'react-router-dom'
import friend2 from './icon friend2.png';
import profile from './icon profile.png';
import group from './icon group.png';

function App({children}) {
 

  return (
    <div className="App">
      
      <div className="App-header">

      <Link to = "/friend-list">
                
                
                <img src= {friend2} width = "50" height = " 40" alt="เพื่อน" />
                
      </Link>

      <Link to = "/profile">
                
                <img src= {profile} width = "50" height = " 40" alt="โปร์ไฟล์" />

      </Link>

      <Link to = "/group">
                
                 <img src= {group} width = "50" height = " 40" alt="กลุ่ม" />

      </Link>

      <Link to = "/chatbox">
                
                <button>
                    chatbox
                </button>
      </Link>
      </div>
      <div className = "App-content">

      


      {children}
    </div>
      </div>
    
  );
}

export default App;