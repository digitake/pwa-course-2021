import './Prosetting.css';
import { Link } from 'react-router-dom'

function Prosetting() {
    return(
        <div className = 'Prosetting'>
             <header className="Prosetting-Main">
                 <img className="Prosetting-Text" src="/Project/Prosetting/Setting_Text.png" alt = "/Project/Prosetting/Setting_Text.png" />
             </header>
             <div>
                 <img className="Prosetting-Icon-Back" src="/Project/Prosetting/Setting_Icon.png" alt = "/Project/Prosetting/Setting_Icon.png" />
             </div>
             <div>
                 <img className="Prosetting-Pro" src="/Project/Prosetting/Setting_Pro.png" alt = "/Project/Prosetting/Setting_Pro.png" />
             </div>
             <div>
                 <img className="Prosetting-User" src="/Project/Prosetting/Setting_Username.png" alt = "/Project/Prosetting/Setting_Username.png" />
             </div>
             <div>
                 <img className="Prosetting-Account" src="/Project/Prosetting/Setting_Account.png" alt = "/Project/Prosetting/Setting_Account.png" />
             </div>
        </div>

    );
}

export default Prosetting;