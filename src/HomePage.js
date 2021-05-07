import './HomePage.css';
import { Link } from 'react-router-dom';
import logo2 from './LoginIcon.png'


function HomePage() {
  return (
    <div className="HomePage">
        <div className="HomeMain">
        </div>
        <div className="Homebottom">
            <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
            </div>
    </div>
  );
};

export default HomePage;