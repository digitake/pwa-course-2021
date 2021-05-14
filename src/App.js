import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {

  return (
    <div className="App col-6">
      <div className="App-header">
             <div className="App-logo">
             </div>
             <div className="App-logo Button">
             <Link to ="/menu">
              <image>
              <img src ="down32.png" align ="right" class="menubutton"/>
              </image>
             </Link>  
             <div className="Flex-Container">
               <div>
             <Link to = "/profile">
               <image>
               <img src ="buttonProfile.png"/>
               </image>
             </Link>
             </div>
             <div>
             <Link to = "/friend-list">
               <image>
               <img src ="buttonFriend.png"/>
               </image>
             </Link>
            </div>
            <div>
             <Link to = "/HotStickersList">
               <image>
               <img src ="buttonShop.png"/>
               </image>
             </Link>
            </div>
            <div>
             <Link to = "/Game">
               <image>
               <img src ="buttonGame.png"/>
               </image>
             </Link>
             </div>
             </div>
             </div>
      </div>
        <div className="App-content">
        {children}
        </div>

      </div>
    );
};

export default App;
