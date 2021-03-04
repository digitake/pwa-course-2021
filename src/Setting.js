import './Settings.css';
import { Link } from 'react-router-dom';
function Settings(){
    return(
        <div className="Header">
            <div className="Container">
                Settings
               <ul className="Function">
                   <li className="Function-link">
                   <a href="#">Notifications</a>
                   </li>
                   <li className="Function-link">
                   <a href="#">ThemeColor</a>
                   </li>
                   <li className="Function-link">
                   <a href="#">Textbox color</a>
                   </li>
                   <li className="Function-link">
                   <a href="#">Infomation</a>
                   </li>
                   <li className="Function-link">
                   <a href="#">Logout</a>
                   </li>
                   </ul> 
        <div className="App-contents">
        </div>
        <Link to="/">
        <button>
        PrivateChatRoom
        </button>
        </Link>
            </div>
        </div>
    );
};

export default Settings;