import { Link } from 'react-router-dom';
import App from './App'
import'./FriendList.css';
import FriendListIcon from './profile.png';


function FriendList(params) 
{
    return(
        <App>
        <div className = "FriendList">

        <div className = "FriendList1">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                <div className = "FriendListName">
                     Natchapol ID : 123456789
                </div>
        </div>

        <div className = "FriendList2">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                <div className = "FriendListName">
                     JoJo ID : 111111111
                </div>
        </div>
        <div className = "FriendList3">
                <img src = {FriendListIcon} alt ="" width = "150px" height ="150px"></img>
                <div className = "FriendListName">
                     Kahjon ID : 999999999
                </div>
        </div>

        </div>
        </App>
    )
};

export default FriendList;