import { Link } from "react-router-dom";
import  lobby  from "./Design/Lobby.jpg";
import "./Lobby.css";
function Lobby(){
    return(
        <div className="lobby">
            <Link to = "/">
                <img src={lobby} width="480" height="852" alt = "Lobby"/>
            </Link>
        </div>
    )
};
export default Lobby;