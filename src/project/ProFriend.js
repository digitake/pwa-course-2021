import './Protheme.css';
import { Link } from 'react-router-dom';



function ProFriend() {
  return (
  <div className="App">
    <div className="App-header">
      <div className="circlesbox4">  
        <Link to='/ProSetting'>
          <img src="/Project/ProFriend/3Line.png" alt="/Project/ProFriend/3Line.png" width="50px" height="50px"/>         
        </Link>
      </div>
      <div className="text">
      Hoshimati Suisei
      </div>
      <div className="Profile">    
        <Link to='/ProProfile'>
          <button>
            <img src="/Project/ProFriend/Sui.jpg" alt="/Project/ProFriend/Sui.jpg" width="75px" height="75px" />
          </button>
        </Link>
       </div>
    </div>
    <div className="Textline">
      <div className="Textinline">FriendList</div>  
    </div>
    <div className="App-chatroom">    
      <div className="circlesbox1">    
        <Link to='/ProChatroom'>
          <button>
            <img src="/Project/ProFriend/sad.png" alt="/Project/ProFriend/sad.png" width="100px" height="100px" />
          </button>
        </Link> 
        <div className="text1">
        Pepe1
       </div>
      </div>
      <div className="circlesbox2">    
        <Link to='/ProChatroom'>
          <button>
            <img src="/Project/ProFriend/sad.png" alt="/Project/ProFriend/sad.png" width="100px" height="100px"/>
          </button>
        </Link> 
        <div className="text1">
        Pepe2
       </div>
      </div>
      <div className="circlesbox3">    
      <Link to='/ProChatroom'>
          <button>
            <img src="/Project/ProFriend/nono.jpg" alt="/Project/ProFriend/nono.jpg" width="100px" height="100px" />
          </button>
      </Link> 
          <div className="text1">
          Noel
          </div>
        </div>
    </div>
</div>
  );
}
export default ProFriend;