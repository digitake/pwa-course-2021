<<<<<<< HEAD
import { Link } from 'react-router-dom';

function FriendList() {
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
=======
import { Link } from 'react-router-dom'
import backButton from './logo1.png'
import './FriendList.css';

function FriendList() {
    return (
        <div className="friendlist">
            
            <Link to="/">

            <img src={backButton}></img>
            

            </Link>
        </div>
    )
}
>>>>>>> 0923fd631a25ac73b8d2474bc8b1fc67e591e23c

export default FriendList;