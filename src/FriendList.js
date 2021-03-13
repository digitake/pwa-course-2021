
import App from './App'
import'./FriendList.css';
import FriendListIcon from './profile.png';
import stateOnline from './statusOnline.png'
import stateOffline from './statusOffline.png'

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
                <button>
                        <div className = "FriendListImg">
                        <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                        </div>
                        <div className = "FriendListName">
                         Natchapol 
                         </div>
                         <div className = "Status">
                        <img src = {stateOnline} alt ="" width = "15px" height ="15px"></img> 
                         Online
                         </div>
                
                </button>      
        </div>

        <div className = "FriendList1">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                <div className = "FriendListName">
                     JoJo 
                </div>
                <img src = {stateOnline} alt ="" width = "15px" height ="15px"></img> Online
        </div>
        
        <div className = "FriendList1">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
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