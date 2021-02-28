import './App.css';
import{Link} from 'react-router-dom'
function  Home() {
    return(
      <div>
          Home
          <Link to="/friend-list">
            <button>
             Go to Friend-List
             </button>
            </Link>
        </div>
    )
    
};

export default Home;