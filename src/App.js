import './App.css';
import { Link } from 'react-router-dom';

function App({children}) {
  return (

    <div className="App col-6">

      <div className="App-header">
        <Link to="/friend-list"><button> Friend List </button></Link>
        <Link to="/profile"><button> Profile </button></Link>
        <Link to="/AddFriend"><button> AddFriend </button></Link>
        <Link to="/"> <button> Chatbox </button></Link>
      </div>

      <div className="App-content">{children}</div>
    </div>
    );
}
// ctrl+alt+p to open command then run npm start to open localhost:300 
export default App;
