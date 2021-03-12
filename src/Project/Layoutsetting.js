import './Prosetting.css';
import { Link } from 'react-router-dom';

function Layoutsetting({children}) {
    return (
        <div className = "Prosetting">
            <div className ="Prosetting-header">
                <div>
                    <img className="Prosetting-Text" src="/Project/Prosetting/Setting_Text.png" alt = "/Project/Prosetting/Setting_Text.png" width="255px" height="100px" />
                </div>
                <div>
                    <Link to="/Profriend">
                        <img className="Prosetting-Icon-Back" src="/Project/Prosetting/Setting_Icon.png" alt = "/Project/Prosetting/Setting_Icon.png" width="50px" height="50px" />
                    </Link>
                </div>
            </div>
            <div className = "Prosetting-Bg">
                    {children}
            </div>
        </div>
    );
}

export default Layoutsetting;