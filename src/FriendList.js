import './FriendList.css';
import App from './App';
import { Link } from 'react-router-dom';

function FriendList() {

  return (
  <App>
    <div className="friend-list">
      <div>
      Friend List
      </div>
      <Link to="/">
        Go back
      </Link>
    </div>
  </App>
  )

};

export default FriendList;