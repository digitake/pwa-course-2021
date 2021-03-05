
import{Link} from 'react-router-dom'
import './Home.css';
function  Home() {
    return(
      <div class="background">
        <div class="text">
            Welcome
            <div class ="link">
            <Link to="/friend-list">
            <button>
             Go to Friend-List
             </button>
            </Link>
          <Link to="/chat-room">
            <button>
             Go to Chat Room
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
        </div>
        
        </div>

    )
    
};

export default Home;