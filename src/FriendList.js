import { Link } from 'react-router-dom';

function  FriendList() {
    return (
              <div className="App-header">
              <Link to='/friend-list'>
                  <button>
                      Go Friend list
                  </button>
              </Link>
        </div>
    );  
};

export default FriendList;