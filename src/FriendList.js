<<<<<<< HEAD
import {Link} from 'react-router-dom';
import App from './App';

function FriendList() {
    return (
        <App>
        <div>
            Friend List
=======
import {Link} from "react-router-dom";

function FriendList(){
    return(
        <div>
            Friend List
            <Link to="/">
                <button>
                    Go to Main
                </button>
                
                <img src="phaiProfile.jpg"/>
            </Link>
>>>>>>> b9baf8cdc6fd18c15d1425436ab5f12b445e6faa
        </div>
        </App>
    );
};

export default FriendList;