import {Link} from 'react-router-dom';

function FriendList() {
    return (
        <div>
            <div>Friend List</div>
            <Link to="/">
                Back
            </Link>
        </div>
    );
};

export default FriendList;