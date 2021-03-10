import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import './FriendList.css';

function FriendList() {
return (

    <div className="friendList">
       <div class="friendList-header">
           <div class="friendList-center">
               <div class="friendList-friend">
                <a href="" class="class1">User.1</a>
                <a href="" class="class1">User.2</a>
                <a href="" class="class1">User.3</a>
                <a href="" class="class1">User.4</a>
                <a href="" class="class1">User.5</a>
                <a href="" class="class1">User.6</a>
                <a href="" class="class1">User.7</a>
                <a href="" class="class1">User.8</a>
               </div>
           </div>
           <div className="friendlist">
               <Link to="/">
                <img src={backButton}></img>
              </Link>
            </div>
        </div>
    </div>
        
    )
}

export default FriendList;