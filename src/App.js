import './App.css';

import { Link } from 'react-router-dom';
import Add from './image/users_1.png'
import Chat from './image/chat.png'
import Home from './image/home.png'
import User from './image/user.png'
import Settings from './image/settings.png'
import AddF from './image/add.png'

function App({children}) {
  return (

    <div className="App col-6">

      <div className="App-header">

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

      </div>

      <div className="App-content">
        {children}
      </div>

    </div>
    
  );
}
// ctrl+alt+p to open command then run npm start to open localhost:300 

export default App;
