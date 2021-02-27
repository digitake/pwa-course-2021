import {Link} from 'react-router-dom';

function FriendList() {
    return (
        <div>
            Friend list
            <Link to ="/">
               <button>
                 Black
               </button>  
            </Link>
        </div>
    );
};

export default FriendList;