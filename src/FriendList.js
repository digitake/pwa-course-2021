
import App from './App'
import'./FriendList.css';
import FriendListIcon from './profile.png';
import stateOnline from './statusOnline.png'
import stateOffline from './statusOffline.png'
import { Link } from 'react-router-dom';

function FriendList(params) 
{
    return(
        <App>
        <div className = "FriendList">
                <div className = "FriendListMid">
                <div className ="FriendList-Header">
                 My Friend List
                 </div>       

        <div className = "FriendList1">
                <Link to = "/chatbox">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                </Link>
                <div className = "FriendListName">
                     Natchapol 
                 </div>
                 
                
                 
                <img src = {stateOnline} alt ="" width = "15px" height ="15px"></img> Online 
               
        </div>

        <div className = "FriendList1">
                <Link to = "/chatbox">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                </Link>
                <div className = "FriendListName">
                     JoJo 
                </div>
                <img src = {stateOnline} alt ="" width = "15px" height ="15px"></img> Online
        </div>
        
        <div className = "FriendList1">
                <Link to = "/chatbox">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                </Link>
                <div className = "FriendListName">
                     Kahjon 
                </div>
                <img src = {stateOffline} alt ="" width = "15px" height ="15px"></img> Offline
        </div>
                </div>

         

        </div>
    
        </App>
    
    )
};

export default FriendList;