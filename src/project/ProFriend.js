import './Protheme.css';
import { Link } from 'react-router-dom';
import HeaderLayout from './LayoutHomework/HeaderLayout';



function ProFriend() {
  return (
  <div className="App">
    <HeaderLayout>
            <div className="Textlayout">
                Hoshimati Suisei
            </div>
            <div className="Profilepicture">    
                <Link to='/Profile'>
                    <img src="/Project/ProFriend/Sui.jpg" alt="/Project/ProFriend/Sui.jpg" width="75px" height="75px" />
                </Link>
            </div>
    </HeaderLayout>
    <div className="Textline">
      <div className="Textinline">FriendList</div>  
    </div>
    <div className="App-chatroom">    
      <div className="circlesboxRut1">    
        <Link to='/ProChatroom'>
            <img src="/Project/ProFriend/sad.png" alt="/Project/ProFriend/sad.png" width="100px" height="100px" />
        </Link> 
      </div>
      <div className="text1">
        Pepe1
       </div>
      <div className="circlesboxRut2">    
        <Link to='/ProChatroom'>
            <img src="/Project/ProFriend/sad.png" alt="/Project/ProFriend/sad.png" width="100px" height="100px"/>
        </Link> 
      </div>
      <div className="text2">
        Pepe2
       </div>
      <div className="circlesboxRut3">    
      <Link to='/ProChatroom'>
            <img src="/Project/ProFriend/nono.jpg" alt="/Project/ProFriend/nono.jpg" width="100px" height="100px" />
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