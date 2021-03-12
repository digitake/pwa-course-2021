import './FriendList.css';
import { Link } from 'react-router-dom';
import App from './App';


function FriendList() {
  return (
    <App>
    <div className="FriendList">
      <div className="FriendList-header">
      contacts
      <div className="FriendList-Headers">
      <Link to="/App">
                <botton>
                    Go to chatroom
                </botton>
            </Link>
      </div>
      </div>
      <div className= "FriendList-Contact-info">
      </div>
      <div className="FriendList-chatroom">
        {
        }
      </div>
    </div>
    </App>
  );
};

export default FriendList;