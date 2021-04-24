import './FriendList.css';
import { Link } from 'react-router-dom';
import App from './App';
import logo2 from './InfoButton.png';


function FriendList() {
  return (
    <App>
    <div className="FriendList">
        <div className="FriendList-header">
          contacts
        <div className="FriendList-Headers">
      <Link to="/App">
      </Link>
      </div>
      </div>
      <div className= "FriendList-Contact-info">
      <Link to="/Info">
                <img src={logo2}/>
              </Link>
      </div>
      <div className= "FriendList-Contact-info1">
      <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
      </div>
      <div className= "FriendList-Contact-info2">
      <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
      </div>
      <div className= "FriendList-Contact-info3">
      <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
      </div>
      <div className= "FriendList-Contact-info4">
      <Link to="/friend-list">
                <img src={logo2}/>
              </Link>
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