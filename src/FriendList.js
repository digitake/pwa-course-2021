import { Link } from 'react-router-dom';

function FriendList(){
    return(
        <div>
            <div>
                Wellcome to Neptune
            </div>
            <Link to ="/">
                <button>
                    Go to Chatroom
                </button>
            </Link>
        </div>
        
    )
};

export default FriendList;