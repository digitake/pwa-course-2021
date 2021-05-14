import './Prosetting.css';
import { Link } from 'react-router-dom'

function Prosetting() {
    return(
        <div className = "fullscreen-prosetting">

            <div className = "header-prosetting">

                <div className = "backfriend-prosetting">
                    <img src="/Project/Profriend/3Line.png" alt="/Project/Profriend/3Line.png" 
                    width ="45px" height="45px" />
                </div>

                <h1 className = "Setting-menu-prosetting">Setting</h1>
                
            </div>

            <div className = "content-prosetting">

                <div className = "header-content-prosetting">

                    <div className = "wall-profile-prosetting">
                        <img src="/Project/Prosetting/Setting_Pro.png" alt="/Project/Prosetting/Setting_Pro.png" 
                        width ="150px" height="150px" />
                    </div>

                    <input type="N-profile" id="nameprofile-prosetting" name="username-profile-prosetting" placeholder="       Ayame"/>

                </div>

                <div className = "content-content-prosetting">

                    <div className = "block-menu-prosetting-1">
                        <img src="/Project/Prosetting/setting-block.png" alt="/Project/Prosetting/setting-block.png" 
                        width ="1920px" height="110px" /> 
                        <h1 className ="Account-menu-prosetting">Account</h1>
                    </div>  

                    <div className ="gogomenu-prosetting">
                        <img src="/Project/Prosetting/go-menu.png" alt="/Project/Prosetting/go-menu.png" 
                        width ="70px" height="70px" /> 
                    </div>

                    <div className = "block-menu-prosetting-2">
                        <img src="/Project/Prosetting/setting-block.png" alt="/Project/Prosetting/setting-block.png" 
                        width ="1920px" height="110px" /> 
                        <h1 className ="Language-menu-prosetting">Language</h1>                        
                    </div>  

                    <div className ="gogomenu-prosetting">
                        <img src="/Project/Prosetting/go-menu.png" alt="/Project/Prosetting/go-menu.png" 
                        width ="70px" height="70px" /> 
                    </div>

                    <div className = "block-menu-prosetting-2">
                        <img src="/Project/Prosetting/setting-block.png" alt="/Project/Prosetting/setting-block.png" 
                        width ="1920px" height="110px" /> 
                        <h1 className ="Support-menu-prosetting">Support</h1>                        
                    </div>  

                    <div className ="gogomenu-prosetting">
                        <img src="/Project/Prosetting/go-menu.png" alt="/Project/Prosetting/go-menu.png" 
                        width ="70px" height="70px" /> 
                    </div>

                    <div className = "block-menu-prosetting-2">
                        <img src="/Project/Prosetting/setting-block.png" alt="/Project/Prosetting/setting-block.png" 
                        width ="1920px" height="110px" /> 
                        <h1 className ="Notification-menu-prosetting">Notification</h1>                        
                    </div>  
                    
                    <div className ="gogomenu-prosetting">
                        <img src="/Project/Prosetting/go-menu.png" alt="/Project/Prosetting/go-menu.png" 
                        width ="70px" height="70px" /> 
                    </div>

                    <div className = "block-menu-prosetting-2">
                        <img src="/Project/Prosetting/setting-block.png" alt="/Project/Prosetting/setting-block.png" 
                        width ="1920px" height="110px" /> 
                        <h1 className ="About-menu-prosetting">About</h1>                        
                    </div>  
                    
                    <div className ="gogomenu-prosetting">
                        <img src="/Project/Prosetting/go-menu.png" alt="/Project/Prosetting/go-menu.png" 
                        width ="70px" height="70px" /> 
                    </div>

                    <div className = "block-menu-prosetting-2">
                        <img src="/Project/Prosetting/setting-block.png" alt="/Project/Prosetting/setting-block.png" 
                        width ="1920px" height="110px" /> 
                        <h1 className ="Logout-menu-prosetting">Log out</h1>                        
                    </div>  
                    
                    <div className ="gogomenu-prosetting">
                        <img src="/Project/Prosetting/go-menu.png" alt="/Project/Prosetting/go-menu.png" 
                        width ="70px" height="70px" /> 
                    </div>

                </div>

            </div>

            <div className = "footer-prosetting">

            </div>

        </div>
    );
}

export default Prosetting;