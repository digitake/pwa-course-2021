<<<<<<< HEAD
import { Link } from 'react-router-dom'
import backButton from './back_button.png'
import './FriendList.css';

function FriendList() {
return (

    <div className="friendList">
       <div class="friendList-header">
           <div class="friendList-center">
               <div class="friendList-friend">
                <div class="item1">User.1</div>
                <div class="item2">User.2</div>
                <div class="item3">User.3</div>
                <div class="item4">User.4</div>
                <div class="item4">User.5</div>
                <div class="item4">User.6</div>
                <div class="item4">User.7</div>
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
=======
import { Link } from 'react-router-dom';

function FriendList(){
    return (
    <div>
        Friend List
        <Link to="/">
            <button>
                Go Chatroom
                </button>
                </Link>
        </div>
    );
};
>>>>>>> c4a1fcf51668531f6a4a8d9f98fbd74c22aa5355

export default FriendList;