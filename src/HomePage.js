import {Link} from 'react-router-dom'
import './AppHomePage.css'

function HomePage({children}) {
    
  return(
    

    <div className = "HomePageInfo">
        <div class="flex-container"/>
        <div className = "HomePageInfo-topBar">
            <p>     .     </p>
            <input type="text" Search="search" placeholder="Search" className = "HomePageInfo-topBar-search"/>
            <div className = "HomePageInfo-topBar-profile"/>
        </div>
                
        <div className = "HomePageInfo-backgroun">

            <div className = "HomePageInfo-backgroun-Botchat">
             {children}
            </div>

        </div>
           
           

        <div className = "ToolBar">

            <div className = "pandding">

                <Link to = "/Chatroom">
                <img src = "ChatBoxBar.Png" alt = "" />
                </Link>
            </div>

            <div className = "pandding" >

                <Link to = "/GroupChatRoom">
                    <img src = "GroupChat.Png" alt = "" />
                </Link>
            </div>

            <div className = "HomePageInfo-topBar-HomePageButton">

                <Link to = "/HomePage">
                <img src = "Home.png" alt = "" />
                </Link> 
            </div>

            <div className = "pandding">

                <Link to = "/PrivatePage">
                    <img src = "Private.Png" alt = "" />
                </Link>
            </div>
            <div className = "pandding">

                <Link to = "/SettingPage">
                    <img src = "SettingBar.Png" alt = "" />
                </Link>
            </div>
        
        </div>

    </div>    
    
    
        

    
  ) 
}
export default HomePage;