
import{Link} from 'react-router-dom'
import './Home.css';
function  Home() {
    return(
      <div class="background">
        <div class="text">
            Welcome
      </div>
      <div class ="link">
            <Link to="/friend-list">
            <button>
             Go to Friend-List
             </button>
            </Link>
            </div>
          <Link to="/chat-room">
            <button>
             Go to Chat Room
             </button>
          </Link>
          <div class="link">
          <Link to="/doc-work">
            <button>
             Go to Document Work
             </button>
          </Link>
          </div>
          <div class="link">
          <Link to="/photo-list">
            <button>
             Go to Photo-List
             </button>
             </Link>
             </div>
      </div>

    )
    
};

export default Home;