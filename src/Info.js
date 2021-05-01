import './Info.css';
import { Link } from 'react-router-dom';
import logo2 from './BackIcon.png';

function Info() {
  return (
    <div className="InfoPage">
      <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
        <div className="InfoMain">
        </div>
    </div>
  );
};

export default Info;