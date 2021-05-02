import { Link } from 'react-router-dom'
import Friend1 from './Friend1.PNG';
import Friend2 from './Friend2.PNG';
function FriendList() {
    return (

        <div className="FriendList">

            <div className="FriendList-header">
            <div className="btn-cover">
            <Link to = "/" style={{  textDecoration: "none" }}>
                    <div className="btn-back">
                                Back
                    </div>
                </Link>
            </div> 
            <div>
            FriendList
            </div>
            </div>
<br/>
            <div className="FriendList-content">
                <a href="https://www.facebook.com/wreedisgood" target="_blank" rel="noreferrer">
                <img src={Friend1} width="200" height="150" alt="เพื่อน1" />
                </a>
               
                <div>
                Sun
            </div>
            <a href="https://www.facebook.com/gninning0602"  target="_blank" rel="noreferrer">
                <img src={Friend2} width="200" height=" 150" alt="เพื่อน2" />
               </a>
                <div>
                Nink
            </div>

            </div>

        </div >

    )
}

export default FriendList
