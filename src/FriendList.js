import './FriendList.css';
import { Link } from 'react-router-dom'
import Friend1 from './Friend1.PNG';
import Friend2 from './Friend2.PNG';
function FriendList(){
    return(
        
        <div className = "FriendList">

        <div className="FriendList-header">
            <div>
            <Link to = "/">
                <button> 
                    back 
                </button> 
            </Link>

            FriendList
            </div>
            </div>

            <div className = "FriendList-content">  

            <img src= {Friend1} width = "200" height = "150" alt="เพื่อน1"/>
            <div>
                Sun
            </div>

            <img src= {Friend2} width = "200" height = " 150" alt="เพื่อน2"/>
            <div>
                Nink
            </div>

</div>

        </div>
        
    )
}

export default FriendList
