import App from './App';
import { Link } from 'react-router-dom';

function FriendList() {

  return (
    <App>
      <div className="profile">
        <div>
          My Profile
      </div>
        <div>
          <Link to="/">
            Go back
          </Link>
        </div>
        <div>
          <Link to="/friend-list">
            Go friend list
          </Link>
        </div>
      </div>
    </App>
  )

};

export default FriendList;