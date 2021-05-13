import './App.css';
import { Link } from 'react-router-dom';
import friendlist from './image/FriendListphoto.png';
import profile from './image/profilephoto.png';
import addfriend from './image/addfriend.png';
import chat from './image/chat.png';
import home from './image/home.png';

function App({children}) {
  return (

    <div className="App col-6">

      <div className="App-header">

        <Link to="/friend-list">
        <img src={friendlist}   width="70" height="70" />&nbsp;&nbsp;&nbsp;
        </Link>

        <Link to="/profile">
        <img src={profile}  width="70" height="70" />&nbsp;&nbsp;&nbsp;
        </Link>

        <Link to="/add-friend">
        <img src={addfriend}  width="70" height="70" />&nbsp;&nbsp;&nbsp;
        </Link>
        
        <Link to="/">
        <img src={chat}   width="70" height="70" />&nbsp;&nbsp;&nbsp;
        </Link>

        <Link to="/Home-page">
        <img src={home}  width="70" height="70" />&nbsp;&nbsp;&nbsp;
        </Link>

      </div>

      <div className="App-content">
        {children}
      </div>

    </div>
    
  );
}
// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
