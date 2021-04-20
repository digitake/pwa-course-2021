import './ProChatroom.css';
import { Link } from 'react-router-dom';

function ProChatroom() {
  return (
    <div className ="fullscreen-prochatroom">

      <div className ="header-prochatroom">

        <div className ="header-header-prochatroom">

          <div className ="go-back-prochatroom">
            <Link to ="ProFriend">
            <img src="/Project/Profile/k6.png" alt="/Project/Profile/k6.png" 
            width ="50px" height="50px" />
            </Link>
          </div>

          <h7 className ="last-chat-prochatroom">Lasted Chat</h7>

        </div>

        <div className ="content-header-prochatroom">

          <div className ="block01-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-kanata">
            <img src="/Project/Profriend/kanata.png" alt="/Project/Profriend/kanata.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-kanata">Kanata</h7>
          <h7 className ="last-chat-kanata">. . . . .ทำอะไรอยู่</h7>

          <div className ="block02-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-fubuki">
            <img src="/Project/Profriend/fubuki.png" alt="/Project/Profriend/fubuki.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-fubuki">Fubuki</h7>
          <h7 className ="last-chat-fubuki">. . . . .เล่นเกมกัน</h7>

          <div className ="block03-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-suisei">
            <img src="/Project/Profriend/suisei.png" alt="/Project/Profriend/suisei.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-suisei">Suisei</h7>
          <h7 className ="last-chat-suisei">. . . .นอนรึยัง. . .</h7>

          <div className ="block04-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-noel">
            <img src="/Project/Profriend/noel.png" alt="/Project/Profriend/noel.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-noel">Noel</h7>
          <h7 className ="last-chat-noel">ayame senpai. . .</h7>

          <div className ="block05-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-rushia">
            <img src="/Project/Profriend/rushia.png" alt="/Project/Profriend/rushia.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-rushia">Rushia</h7>
          <h7 className ="last-chat-rushia">นอนรึยัง. . .</h7>

          <div className ="block06-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-group1">
            <img src="/Project/Profriend/G1.png" alt="/Project/Profriend/G1.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-group1">Group1</h7>
          <h7 className ="last-chat-group1">Ayame : ฝันดี. . .</h7>

          <div className ="block07-prochatroom">
            <img src="/Project/Prochatroom/blockCR.png" alt="/Project/Prochatroom/blockCR.png" 
            width ="565px" height="100px" />
          </div>

          <div className ="last-chat-friendlist-group2">
            <img src="/Project/Profriend/G2.png" alt="/Project/Profriend/G2.png" 
            width ="80px" height="80px" />
          </div>
          <h7 className ="last-chat-name-group2">Group1</h7>
          <h7 className ="last-chat-group2">Ayame : ฝันดี. . .</h7>

        </div>

      </div>

      <div className ="content-prochatroom">

        <div className ="header-content-prochatroom" >

          <div className ="chatroom-friend-icon">
            <img src="/Project/Profriend/pekora.png" alt="/Project/Profriend/pekora.png" 
            width ="100px" height="100px" />
          </div>
          <h3 className ="chatroom-friend-name-pekora">Pekora</h3>

          <div className ="lock-prochatroom">
            <img src="/Project/Prochatroom/lock.jpg" alt="/Project/Prochatroom/lock.jpg" 
            width ="70px" height="70px" />
          </div>

        </div>
        

        <div className ="content-content-prochatroom" >

        </div>

        <div className ="fotter-content-prochatroom" >

          <div className ="plus-prochatroom">
            <img src="/Project/Prochatroom/plus.jpg" alt="/Project/Prochatroom/plus.jpg" 
            width ="70px" height="70px" />
          </div>

          <div className ="send-prochatroom">
            <img src="/Project/Prochatroom/send.png" alt="/Project/Prochatroom/send.png" 
            width ="50px" height="50px" />
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProChatroom