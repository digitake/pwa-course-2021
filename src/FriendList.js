import {Link}  from "react-router-dom";
import './FriendList.css';
import  nepture  from "./FriendList.jpg";
function FriendList(){
    return(
        <div>
            <Link to = "/chat-room">
                <img src={nepture} alt="Nepture"/>
            </Link>
        </div>
    )
};
export default FriendList;