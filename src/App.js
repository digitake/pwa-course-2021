import { Link } from 'react-router-dom'
import Friend from './Friend.png';
import Profile from './Profile.png';
import Group from './Group.png';
import Chat from './Chat.png';

function App() {
 

  return (
    <div className="App">
      
      <div className="Chatbox-header">
        <Link to="/friend-list">
          <img className="image-header" src={Friend} width="50" alt="เพื่อน" />
        </Link>
        <Link to="/profile">
          <img className="image-header" src={Profile} width="50" alt="โปร์ไฟล์" />
        </Link>
        <Link to="/group">
          <img className="image-header" src={Group} width="50" alt="กลุ่ม" />
        </Link>
        <Link to="/chatbox">
          <img className="image-header" src={Chat} width="50" height=" 40" alt="กลุ่ม" />
        </Link>
      </div>
      <div className = "App-content">
        🎁 ยินดีต้อนรับสู่ App Chat ผู้โดดเดี่ยว 🎁
    </div>
      </div>
    
  );
}

export default App;