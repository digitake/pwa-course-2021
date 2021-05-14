import './LobbyHeader.css';
import {Link} from "react-router-dom";


function LobbyHeader({children}) {
    return (
        <div className="App col-12">
            <div className="App-header">
                <table>
                    <tr>
                        <th>
                            <div className="profile-read-ju-on"/>
                        </th>
                        <th>
                            <h1>Room Ju-on</h1>
                            <h4>RID 123456</h4>
                        </th>
                        <th>
                            <div className="profile-list">
                                <Link to="/Profile_Tar">
                                    <div className="profile-read-tar"/>
                                </Link>
                                <div className="profile-read-pruek"/>
                                <div className="profile-read-phai"/>
                            </div>
                        </th>
                    </tr>
                </table>
                <div className="RoomName">
                </div>
            </div>
            <div className="App-Content">
                {children}
            </div>
        </div>
    );
}
//Message form 1620701795 Give Me A SenPai
export default LobbyHeader;
