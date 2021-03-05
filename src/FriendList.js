import App from './App';
import { Link } from 'react-router-dom';

function FriendList() {

  return (
  <App>
    <div>Friend List</div>
    <Link to="/">
      Go back
    </Link>
  </App>
  )

};

export default FriendList;