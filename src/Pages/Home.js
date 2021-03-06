import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import App from '../App';

function Home() {
    return (
        <App>
            <div>
                <div className="App">
                    <div className='app'>
                        <Link to='/Chat'>
                            <button className='iconButton'>
                                Chat</button>
                        </Link>
                        <Link to='/feed'>
                            <button className='iconButton'>
                                Feed</button>
                        </Link>

                        <Link to='/insepect-profile'>
                            <button className='iconButton'>
                                Profile</button>
                        </Link>
                    </div>
                    <div className='app'>

                        <Link to='/profile-setting'>
                            <button className='iconButton'>
                                Settings</button>
                        </Link>
                    </div>

                </div>
            </div >
        </App>

    );
}

export default Home;
