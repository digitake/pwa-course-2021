import './ProFriend.css';
import { Link } from 'react-router-dom';

function ProFriend () {
  return (
    <div className ="fullscreen-profriend">

      <div className ="header-profriend">

        <div className ="logo-boxchat-profriend">
          <img src="/Project/Prologin/boxchat.jpg" alt ="/Project/Prologin/boxchat.jpg" 
          width ="180px" height ="100px" />
        </div>

        <div className ="logo-profile-profriend">
          <Link to ="Profile">
          <img src ="/Project/Profile/k1.png" alt ="/Project/Profile/k1.png"
          width ="100px" />
          </Link>
        </div>
        <h1 className ="name-profile">Ayame</h1>

        <div className ="gosetting-logo-profriend">
          <Link to ="Prosetting">
          <img src ="/Project/Profriend/3Line.png" alt ="/Project/Profriend/3Line.png"
          width ="60px" />
          </Link>
        </div>

      </div>

      <div className ="content-profriend">

        <div className ="Sbarblock-profriend">
          <img src ="/Project/Profriend/Sbarblock.png" alt ="/Project/Profriend/Sbarblock.png"
          width ="1920px" height ="50px" />
        </div>

        <div className ="Sbaricon-profriend">
          <img src ="/Project/Profriend/Sbaricon.png" alt ="/Project/Profriend/Sbaricon.png"
          width ="30px" height ="30px" />
        </div>
        <h2 className ="Sbartext-profriend">:search</h2>

        <div className ="Lasted-chat-bar">
          <img src ="/Project/Profriend/namebarblock.png" alt ="/Project/Profriend/namebarblock.png"
          width ="1920px" height ="50px" />
        </div>
        <h3 className ="Lasted-chat-text">Lasted Chat</h3>

        <div className ="Lasted-chat-gogo-icon">
          <img src ="/Project/Profriend/gogo.png" alt ="/Project/Profriend/gogo.png"
          width ="30px" height ="30px" />
        </div>

        <div className ="Lasted-chat-friendlist">
          <img src ="/Project/Profriend/friendblock.png" alt ="/Project/Profriend/friendblock.png"
          width ="1920px" height ="150px" />
        </div>

        <div className ="noel-icon-lasted-chat">
          <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/noel.png" alt ="/Project/Profriend/noel.png"
          width ="100px" height ="100px" />
          </Link>
          <p className ="lasted-chat-name-noel">noel</p>
        </div>

        <div className ="kanata-icon-lasted-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/kanata.png" alt ="/Project/Profriend/kanata.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="lasted-chat-name-kanata">kanata</p>
        </div>

        <div className ="suisei-icon-lasted-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/suisei.png" alt ="/Project/Profriend/suisei.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="lasted-chat-name-suisei">suisei</p>
        </div>

        <div className ="group-bar">
          <img src ="/Project/Profriend/namebarblock.png" alt ="/Project/Profriend/namebarblock.png"
          width ="1920px" height ="50px" />
        </div>
        <h3 className ="group-text">Group</h3>

        <div className ="group-chat-gogo-icon">
          <img src ="/Project/Profriend/gogo.png" alt ="/Project/Profriend/gogo.png"
          width ="30px" height ="30px" />
        </div>

        <div className ="group-chat-friendlist">
          <img src ="/Project/Profriend/friendblock.png" alt ="/Project/Profriend/friendblock.png"
          width ="1920px" height ="150px" />
        </div>

        <div className ="group1-icon-lasted-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/G1.png" alt ="/Project/Profriend/G1.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="group1-chat-name">Group 1</p>
        </div>

        <div className ="group2-icon-lasted-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/G2.png" alt ="/Project/Profriend/G2.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="group2-chat-name">Group 2</p>
        </div>

        <div className ="friend-chat-bar">
          <img src ="/Project/Profriend/namebarblock.png" alt ="/Project/Profriend/namebarblock.png"
          width ="1920px" height ="50px" />
        </div>
        <h3 className ="friend-chat-text">Friend</h3>

        <div className ="friend-chat-gogo-icon">
          <img src ="/Project/Profriend/gogo.png" alt ="/Project/Profriend/gogo.png"
          width ="30px" height ="30px" />
        </div>

        <div className ="friend-chat-friendlist">
          <img src ="/Project/Profriend/friendblock.png" alt ="/Project/Profriend/friendblock.png"
          width ="1920px" height ="270px" />
        </div>

        <div className ="pekora-icon-friend-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/pekora.png" alt ="/Project/Profriend/pekora.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="friend-chat-name-pekora">pekora</p>
        </div>

        <div className ="fubuki-icon-friend-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/fubuki.png" alt ="/Project/Profriend/fubuki.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="friend-chat-name-fubuki">fubuki</p>
        </div>

        <div className ="kanata-icon-friend-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/kanata.png" alt ="/Project/Profriend/kanata.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="friend-chat-name-kanata">kanata</p>
        </div>

        <div className ="rushia-icon-friend-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/rushia.png" alt ="/Project/Profriend/rushia.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="friend-chat-name-rushia">rushia</p>
        </div>

        <div className ="noel-icon-friend-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/noel.png" alt ="/Project/Profriend/noel.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="friend-chat-name-noel">noel</p>
        </div>

        <div className ="suisei-icon-friend-chat">
        <Link to ="/Prochatroom">
          <img src ="/Project/Profriend/suisei.png" alt ="/Project/Profriend/suisei.png"
          width ="100px" height ="100px" />
        </Link>
          <p className ="friend-chat-name-suisei">suisei</p>
        </div>

<<<<<<< HEAD
function ProFriend() {
  return (
  <div className="Apprut">
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
=======
>>>>>>> db59708705822d26d66b7c28c6a1fc1891a4059f
      </div>

      <div className ="fotter-profriend">

      </div>

    </div>
  );
}
export default ProFriend