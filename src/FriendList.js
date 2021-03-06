import LinkTo from './Components/LinkManager'
import App from './App';

function FriendList() {
    return (
        <App>

            <div>
                <h1>FriendList</h1>
                <LinkTo value="Go Back!" to="/app" />
            </div>

        </App>

    );
}

export default FriendList;