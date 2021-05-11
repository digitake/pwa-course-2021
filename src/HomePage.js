import App from './App';
import Add from './image/users_1.png'
import Chat from './image/chat.png'
import Home from './image/home.png'
import User from './image/user.png'
import Settings from './image/settings.png'
import AddF from './image/add.png'
import { Link } from 'react-router-dom';

function  HomePage() {

    return(
        
        <div className="App-header">
        
    
        <body>
        <Link to="/friend-list">
        <div align>
        <img src={Add} border="3" width="50" height="51"/>
        </div>
        </Link>

        <Link to="/profile">
        <div align>
        <img src={User} border="3" width="50" height="51"/>
        </div>
        </Link>

        <Link to="/addfriend">
        <div align>
        <img src={AddF} border="3"width="50" height="51" />
        </div>
        </Link>
        
        <Link to="/">
        <div align>
        <img src={Chat} border="3" width="50" height="51"/>
        </div>
        </Link>
        <Link to="/Home-page">
        <div align>
        <img src={Home} border="3"width="50" height="51" />
        </div>
        </Link>
        </body>
        
        </div>
        
    )
    
};

export default HomePage;