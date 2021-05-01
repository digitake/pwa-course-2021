import { Link } from 'react-router-dom'
import Friend from './Friend.png';
import Profile from './Profile.png';
import Group from './Group.png';
import Chat from './Chat.png';

function App() {
 

  return (
    <div className="App">
      
      <div className="App-header">

      <Link to = "/friend-list">
                
                
                <img src= {Friend} width = "50" height = " 60" alt="เพื่อน" />
                
      </Link>

      <Link to = "/profile">
                
                <img src= {Profile} width = "50" height = " 40" alt="โปร์ไฟล์" />

      </Link>

      <Link to = "/group">
                
                 <img src= {Group} width = "50" height = " 40" alt="กลุ่ม" />

      </Link>

      <Link to = "/chatbox">
                
                <button>
                <img src= {Chat} width = "50" height = " 40" alt="กลุ่ม" />
                </button>
                
      </Link>
      </div>
      <div className = "App-content">

      
        ยินดีต้อนรับ App Chat ผู้โดดเดี่ยว

      
    </div>
      </div>
    
  );
}

export default App;