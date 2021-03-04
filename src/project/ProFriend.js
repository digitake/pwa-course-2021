import './Protheme.css';
import { Link } from 'react-router-dom';



function ProFriend() {
  return (
  <div className="App">
    <div className="App-header">
      <div className="circlesbox4">  
        <Link to='/ProSetting'>
          <img src="3Line.png" alt="3Line.png" width="50px" height="50px"/>         
        </Link>
      </div>
      <div className="text">
      Hoshimati Suisei
      </div>
      <div className="Profile">    
        <Link to='/ProProfile'>
            <img src="Sui.jpg" alt="Sui.jpg" width="75px" height="75px" />          
        </Link>
       </div>
    </div>
    <div className="Textline">
      <div className="Textinline">FriendList</div>  
    </div>
    <div className="App-chatroom">    
      <div className="circlesbox1">    
        <Link to='/ProChatroom'>
            <img src="sad.png" alt="sad.png" width="100px" height="100px" />
        </Link> 
      </div>
      <div className="text1">
        Pepe1
       </div>
      <div className="circlesbox2">    
        <Link to='/ProChatroom'>
            <img src="sad.png" alt="sad.png" width="100px" height="100px"/>       
        </Link> 
      </div>
      <div className="text2">
        Pepe2
       </div>
      <div className="circlesbox3">    
      <Link to='/ProChatroom'>
            <img src="nono.jpg" alt="nono.jpg" width="100px" height="100px" />
      </Link> 
        </div>
        <div className="text3">
          Noel
          </div>
    </div>
</div>
  );
}
export default ProFriend;