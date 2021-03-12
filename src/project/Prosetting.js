import './Prosetting.css';
import { Link } from 'react-router-dom'
import Layoutsetting from './Layoutsetting';

function Prosetting() {
    return(
        <Layoutsetting>
            <div className= "Prosetting-ProUi">
                <div>
                    <img className="Prosetting-Pro" src="/Project/Prosetting/Setting_Pro.png" alt = "/Project/Prosetting/Setting_Pro.png" width="70px" height="70px" />
                </div>
                <div>
                    <img className="Prosetting-User" src="/Project/Prosetting/Setting_Username.png" alt = "/Project/Prosetting/Setting_Username.png" width="200px" height="60px"  />
                </div>
            </div>
            <div className ="Prosetting-InterUi">
                <div>
                    <Link to="/Profile">
                        <img className="Prosetting-Account" src="/Project/Prosetting/Setting_Account.png" alt = "/Project/Prosetting/Setting_Account.png" width="600px" height="80px" />
                    </Link>
                </div>
                <div>
                    <img className="Prosetting-Laug" src="/Project/Prosetting/Setting_Laug.png" alt = "/Project/Prosetting/Setting_Laug.png" width="600px" height="80px" />
                </div>
                <div>
                    <img className="Prosetting-Support" src="/Project/Prosetting/Setting_Support.png" alt = "/Project/Prosetting/Setting_Support.png" width="600px" height="80px" />
                </div>
                <div>
                    <img className="Prosetting-Not" src="/Project/Prosetting/Setting_Notifications.png" alt = "/Project/Prosetting/Setting_Notifications.png" width="600px" height="80px" />
                </div>
                <div>
                    <Link to="/Prologin">
                        <img className="Prosetting-Logout" src="/Project/Prosetting/Setting_Logout.png" alt = "/Project/Prosetting/Setting_Logout.png" width="600px" height="80px" />
                    </Link>
                </div>
            </div>
        </Layoutsetting>
    );
}

export default Prosetting;