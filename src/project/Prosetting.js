import './Prosetting.css';
import { Link } from 'react-router-dom'

function Prosetting({children}) {
    return(
        <div className = "Prosetting">
            <div className ="Prosetting-header">
                <div>
                    <img className="Prosetting-Text" src="/Project/Prosetting/Setting_Text.png" alt = "/Project/Prosetting/Setting_Text.png" />
                </div>
                <div>
                    <Link to="/Profriend">
                        <img className="Prosetting-Icon-Back" src="/Project/Prosetting/Setting_Icon.png" alt = "/Project/Prosetting/Setting_Icon.png" />
                    </Link>
                </div>
                <div>
                    <img className="Prosetting-Pro" src="/Project/Prosetting/Setting_Pro.png" alt = "/Project/Prosetting/Setting_Pro.png" />
                </div>
                <div>
                    <img className="Prosetting-User" src="/Project/Prosetting/Setting_Username.png" alt = "/Project/Prosetting/Setting_Username.png" />
                </div>
                <div>
                    <Link to="/Profile">
                        <img className="Prosetting-Account" src="/Project/Prosetting/Setting_Account.png" alt = "/Project/Prosetting/Setting_Account.png" />
                    </Link>
                </div>
                <div>
                    <img className="Prosetting-Laug" src="/Project/Prosetting/Setting_Laug.png" alt = "/Project/Prosetting/Setting_Laug.png" />
                </div>
                <div>
                    <img className="Prosetting-Support" src="/Project/Prosetting/Setting_Support.png" alt = "/Project/Prosetting/Setting_Support.png" />
                </div>
                <div>
                    <img className="Prosetting-Not" src="/Project/Prosetting/Setting_Notifications.png" alt = "/Project/Prosetting/Setting_Notifications.png" />
                </div>
                <div>
                    <Link to="/Prologin">
                        <img className="Prosetting-Logout" src="/Project/Prosetting/Setting_Logout.png" alt = "/Project/Prosetting/Setting_Logout.png" />
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Prosetting;