import App from '../App';
import '../CSS/Profile.css';
import AvatarImg from '../img/img_avatar.png';
import { Link } from 'react-router-dom'

function Cover() {
    return (
        <div className='cover' >
            <div className='profile-header'>
                <div className='back'>◀</div>
                <div className='profilelabel'>Profile</div>
                <div className='option'>•••</div>
            </div>
        </div>
    );
}

function Detail() {
    return (
        <div className='profile-container'>
            <div className='avatar-container'>
                <img className='profile-avatar' src={AvatarImg} alt='avatar' />
                <div className='profile-name'>
                    <h2>Very Good</h2>
                    <a>📍 Bangkok University</a>
                </div>
            </div>

            <div className='profile-detail'>

                <h4>Profile  Settings</h4>
                <div className='line' />
                <div className='text'>
                    <a>Theme</a>
                    <a>Light</a>
                </div>
                <div className='text'>
                    <a>Backup</a>
                    <input type='checkbox' />
                </div>

                <h4>Account</h4>
                <div className='line' />
                <div className='text'>
                    <a>Username</a>
                    <a>Very Good</a>
                </div>
                <div className='text'>
                    <a>Phone</a>
                    <a>+66 xx xxx xxxx</a>
                </div>
                <div className='text'>
                    <a>Email</a>
                    <a>verygood@bumail.net</a>
                </div>
                <div className='text'>
                    <a>Password</a>
                    <a>*****</a>
                </div>
            </div>

        </div>
    );
}

function SignOut() {
    return (
        <Link to='login' className='signout'>
            Sign Out
        </Link>

    );
}

function Profile() {
    return (
        <App>
            <div className='App-Profile'>
                <Cover />
                <Detail />
                <SignOut />
            </div>
        </App>
    );
}

export default Profile;