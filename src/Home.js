import './App.css';
import{Link} from 'react-router-dom'
function  Home() {
    return(
      <div>
          Home
          <Link to="/cradit">
            <button>
             Go to Cradit-List
             </button>
            </Link>
        </div>
    )
    
};

export default Home;