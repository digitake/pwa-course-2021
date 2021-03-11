
import { Link } from 'react-router-dom';
import './Home.css';
import Chatbutton from './chat.png';
import Friendbutton from './friend.png';
import gif from './giphy.gif';
import profile from './cool5.png';

function Home() {
    return(
        <div className = "Home">
                <div className ="link">
                <Link to = "/chatbox">
                <button>
                    <img src ={Chatbutton} alt="" width="75" height="75"></img>
                </button>
                </Link>
        </div>
        <div className ="link">
            <Link to ="/friend-list">
            <button>
                <img src ={Friendbutton} alt="" width = "75" height = "75"></img>
            </button>
            </Link> 
        </div>
        <div className ="link">
            <Link to ="/profile1">
                <button>
                    <img src ={profile} alt="" width = "75" height = "75"></img>
                </button>
            </Link>
        </div>

        <div className = "Text">
            Find
            <div>
            Friends
        </div>
        </div>
        <div className = "gif">
        <img src = {gif} alt= "" width = "300" height = "300"></img>
        </div>

        </div>
        

        
    )
};

export default Home;