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
            <Link to="/">
            <button>
             Go to Chatroom
             </button>
          </Link>
          <Link to="/home">
            <button>
             Go to home
             </button>
          </Link>
          <Link to="/doc-work">
            <button>
             Go to Document Work
             </button>
          </Link>
          <Link to="/photo-list">
            <button>
             Go to Photo-List
             </button>
             </Link>
      </div>
    )
    
};

export default Cradit;