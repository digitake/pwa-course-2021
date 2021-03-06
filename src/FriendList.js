import {Link} from 'react-router-dom';


function FriendList(){
    return (
        <div className="FriendList">
          <div className="FriendList-header">
        
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
      );
    };

export default FriendList;