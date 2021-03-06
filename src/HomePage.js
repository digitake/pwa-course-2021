import {Link} from 'react-router-dom'
import './App.css';

function HomePage({children}) {
  return(


     <div className = "HomePageInfo">
        <div className = "HomePageInfo-topBar">
          <div className = "ToolBar">

            <div className = "">
            <Link to = "/Chatroom">
                <img src = "ChatBoxBar.Png" alt = "" />

            </Link>
        </div>
        <div className = "">
            <Link to = "/GroupChatBox">
                <img src = "GroupChat.Png" alt = "" />
                
            </Link>
        </div>
        <div className = "">
            <Link to = "/PrivateChatBox">
                <img src = "Private.Png" alt = "" />
                
            </Link>
        </div>
        <div className = "">
            <Link to = "/SettingPage">
                <img src = "SettingBar.Png" alt = "" />
        
            </Link>
        </div>

        </div>
        
        <div className ="">
            {children}
        </div>
        
        </div>
    </div>
        

    
  ) 
}
export default HomePage;