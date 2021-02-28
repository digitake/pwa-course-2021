import {Link} from 'react-router-dom'


function HomePage() {
  return(

     <div className = "HomePageInfo">
        <div className = "ChatBar">
            <Link to = "/Chat-Room">
            <img src = "ChatBoxBar.Png" alt = "" />
            </Link>
        </div>
        <div className = "GroupBar">
            <Link to = "/GroupChatBox">
            <img src = "GroupChat.Png" alt = "" />
            </Link>
        </div>
        <div className = "PrivateBar">
            <Link to = "/PrivateChatBox">
            <img src = "Private.Png" alt = "" />
            </Link>
        </div>
        <div className = "SettingBar">
            <Link to = "/SettingBar">
            <img src = "SettingBar.Png" alt = "" />
            </Link>
        </div>

    </div>
  ) 
}
export default HomePage;