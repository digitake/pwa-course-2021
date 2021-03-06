
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
      <Link to="/friend-list">
                <botton>
                    Go to friendlist
                </botton>
            </Link>
      <div className="Home-Headers">
      </div>
      </div>
      <div className="FriendList-chatroom">
        {
        }
      </div>
    </div>
  );
};

export default Home;