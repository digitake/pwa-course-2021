import { Link } from 'react-router-dom';
import '../Pages/Feed.css';
import LogoPng from '../Neptune/Logo.png';

function Main() {
    return (
        <div>
            <div className="App">
                <div className="header">
                    <img className='logo' src={LogoPng} alt='No Img' />
                    <button className='profile'>
                        Tommy
                        </button>
                </div>
                <div className='app'>
                    <Link to='/feed'>
                        <button className='iconButton'>
                            Feed</button>
                    </Link>

                    <Link to='/insepect-profile'>
                        <button className='iconButton'>
                            Profile</button>
                    </Link>
                    <Link to='/profile-setting'>
                        <button className='iconButton'>
                            Settings</button>
                    </Link>
                </div>

            </div>
        </div >
    );
}

export default Main;
