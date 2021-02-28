import './App.css';
import{Link} from 'react-router-dom'
function  Cradit() {
    return(
      <div>
        Cradit
          <Link to="/friend-list">
            <button>
             Go to Friend-List
             </button>
            </Link>
      </div>
    )
    
};

export default Cradit;