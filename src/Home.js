import { Link } from 'react-router-dom';
import FriendList from './FriendList';
import './Home.css';

function Home(){
    return(
        <div className="fullscreen">
            <Link to="profile">
            <img src="logoHOme.png" />
            </Link>
            

        </div>
    
    )
}

export default Home;