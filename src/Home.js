
import { Link } from 'react-router-dom';
import './Home.css';
import Chatbutton from './chat.png';
import Friendbutton from './friend.png';

function Home() {
    return(
        <div className = "Home">
                <div className ="link">
                <Link to = "/chatbox">
                <button>
                    <img src ={Chatbutton} alt="" width="100" height="100"></img>
                </button>
                </Link>
        </div>
        <div className ="link">
            <Link to ="/friend-list">
            <button>
                <img src ={Friendbutton} alt="" width = "100" height = "100"></img>
            </button>
            </Link> 
        </div>
        </div>
        

        
    )
};

export default Home;