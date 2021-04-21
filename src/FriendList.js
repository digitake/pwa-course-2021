import LinkTo from './Components/LinkManager'
import App from './App';
import './FriendList.css';

function FriendList() {
    return (
        <App>
            <div className='friendList'>
                <h1>You have no friend!</h1>
                <LinkTo value="Go Back!" to="/app" />
            </div>

        </App>

    );
}

export default FriendList;