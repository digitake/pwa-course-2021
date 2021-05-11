import { Link } from 'react-router-dom';

import App from './App';

function FriendList() {

    return (
        <div className="App-header">
        <App>

            <div>

                <div>Friend List</div>

                <Link to="/friend-list">
                    <button> Go to Chatroom </button>
                </Link>
                
            </div>
            
        </App>
        </div>
    )
};

export default FriendList;