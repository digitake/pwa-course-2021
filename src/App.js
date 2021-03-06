import './App.css';
<<<<<<< HEAD
import { Link } form 'react-router-dom';


function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
      <Link to="/friend-list">
          <button>
              Friend-list
          </button>
        </Link>

        <Link to="/profile">
          <button>
              Profile
          </button>
        </Link>

        <Link to="/chatbox">
          <button>
              Chatbox
          </button>
        </Link>

      </div>
      <div className="App-content">
=======
import LinkTo from './Components/LinkManager';

function App({ children }) {
  return (
    <div className="App">
      <div className="App-header">
        <LinkTo value='Home' to='home' />
        <LinkTo value='Chat' to='chat' />
        <LinkTo value='Feed' to='friend-list' />
        <LinkTo value='Friend List' to='friend-list' />
      </div>

      <div className='App-content'>
>>>>>>> b49edfa271afdd785d6876546f642c3293919999
        {children}
      </div>
    </div>
      
  );
}

export default App;
