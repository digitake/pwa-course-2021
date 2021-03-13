import App from '../App';
import profile from '../design/ProfileSetting(LightMode).jpg';
function Profile() {
    return (
        <App>
            <div>
            <img src={profile} alt='No Img' />
            </div>
        </App>

    );
}

export default Profile;