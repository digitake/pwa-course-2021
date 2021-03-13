import './LobbyHeader.css';
import {Link} from "react-router-dom";

function LobbyHeader({children}) {
    return (
        <div className="App col-12">
            <div className="App-header">
                <div className="RoomName">
                    <div className="profile-read-ju-on"/>
                    <h1>Room Ju-on</h1>
                    <h4>RID 123456</h4>
                </div>
                <div className="profile-list">
                    <Link to="/Profile_Tar">
                        <div className="profile-read-tar"/>
                    </Link>
                    <div className="profile-read-pruek"/>
                    <div className="profile-read-phai"/>
                    <div className="profile-read-Taro"/>
                </div>
            </div>
            <div className="App-Content">
                {children}
            </div>
        </div>
    );
}

export default LobbyHeader;
