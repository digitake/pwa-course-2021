import './App.css';
import  { Link } from 'react-router-dom';
import shopButton from './shop_button.png'
import friendButton from './friendList_button.png'
import chatroomButton from './Chatbutton.png'
import dropdownButton from './icon2.png'


import './onClick.js'


function App({children}) {

  return (


    <div className="App">
      <div className="App-header">
        <div class="dropdown">
          <script src onClick></script>
            <button onclick="myFunction()" class="dropbtn"><img src={dropdownButton}></img></button>
              <div id="myDropdown" class="dropdown-content">
            
                <a href="#"><Link to="/friend-list"> <img src={friendButton}></img> </Link></a>
                <a href="#"><Link to="/shop"> <img src={shopButton}></img> </Link></a>
                <a href="#"><Link to="/chatroom"><img src={chatroomButton}></img></Link></a>
                <Link to="/profile">Profile</Link>
                <Link to="/">Main</Link>
         
              </div>
        </div>
        <div className="App-content">
          {children}
        </div> 
      </div>     
    </div>

    

  );
}

export default App;
