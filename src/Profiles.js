import './Profiles.css';
import { FiFacebook,FiInstagram,FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';

function profiles() {
    return (
    <div className="Page">
            <div className="contain">
                Profiles
               <ul className="Function">
                   <li className="Function-link">
                   <a href="#"><FiFacebook/>Facebook</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><FiInstagram/>Instagram</a>
                   </li>
                   <li className="Function-link">
                   <a href="#"><FiTwitter/>Twitter</a>
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
}

export default profiles;