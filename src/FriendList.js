import './FriendList.css';
import { Link } from 'react-router-dom'
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

            <Link to = "/chatbox">
                 <button>
                     แชทคุยกับอาจารย์ 
                 </button>
            </Link>
                <div>
                    เว้นว่าง ให้จารย์ช่วยความกว้าง
                </div>

            <div>
                <Link to = "/chatbox2">
                    <button>
                      หาเพื่อนเล่นเกม
                    </button>
                </Link>
            </div>

</div>

        </div>
        
    )
}

export default FriendList
