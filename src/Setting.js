import './Settings.css';
import { Link } from 'react-router-dom';
import { FiBell,FiInfo,FiLogOut } from "react-icons/fi";
import { BiPaintRoll,BiPalette } from "react-icons/bi";

function Settings(){
    return(
        <div className="Header">
            <div className="Container">
                Settings
               <ul className="Function">
                   <li className="Function-link">
                   <a href="#"><FiBell/>Notifications</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><BiPaintRoll/>ThemeColor</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><BiPalette/>Textbox color</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><FiInfo/>Infomation</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><FiLogOut/>Logout</a>
                   </li>
                   </ul> 
        <div className="App-contents">
        </div>
        <Link to="/PrivateChat">
        <button>
        PrivateChatRoom
        </button>
        </Link>
            </div>
        </div>
    );
};

export default Settings;