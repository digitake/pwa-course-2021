
import LinkTo from '../Components/LinkManager'
import App from '../App';
import ConImg from '../design/Contact.png';

function FriendList() {
    return (
        <App>
            <div>
                <div className='FriendList'>
                    <img src={ConImg} />
                </div>
                <LinkTo value="Go Back!" to="/app" />
            </div>
        </App>

    );
}

export default FriendList;