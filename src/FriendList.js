import './FriendList.css';
import App from './App';
import { Link } from 'react-router-dom';

function FriendList() {

  return (
  <App>
    <div className="friend-list">Friend List</div>
    <Link to="/">
      Go back
    </Link>
  </App>
  )

};

export default FriendList;