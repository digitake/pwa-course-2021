import {Link} from 'react-router-dom'
import './Settings.css'
import { FcAbout } from "react-icons/fc";
import { BiFontColor , BiColorFill , BiNotification} from "react-icons/bi";

function SettingPage() {

    return(

        <div className = "SettingPage">

            <div className = "Header">
                
                 <div className = "Undo2" >
                    <Link to = "/HomePage">
                        <img src = "Union(1).png" alt = "" /> 
                    </Link> 
                </div>
                
                 <div className = "Header-text"/>
                    Settings
            </div>

            <div></div>
           
            <div className = "OptionSetting">

                <div className = "Profile">
                    <Link to = "/profile">
                        <img src = "Profile.png" alt = ""/>
                    </Link>
                </div>

                <div className = "SettingTab">
                   <div> <BiNotification /> Notifications </div>
                   <div> <BiColorFill />    ThemeColor </div>
                   <div> <BiFontColor />    TextboxColor </div>
                   <div> <FcAbout />    Information</div>
                </div>

                <div className  = "LogOut">
                    <Link to = "/">
                            <img src = "LogOut.png" alt = "" /> 
                    </Link>
                </div>

            </div>  

        </div>

    )   
};

export default SettingPage;