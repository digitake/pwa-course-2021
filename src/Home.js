
import{Link} from 'react-router-dom'
import './Home.css';
function  Home() {
    return(
      <div class="background">
        <div class="text">
            Welcome 
            <div>
            to
           </div>
            <div>
            A-nim Chat
      </div>
      </div>
      <div class ="link">
            <Link to="/friend-list">
            <button>
                  <img src="Friends.png" alt="Friend List" width="50" height="50"></img>
             </button>
            </Link>
            </div>
            <div class = "link">
          <Link to="/chat-room">
            <button>
            <img src="Chat.png" alt="Chat room" width="50" height="50"></img>
             </button>
          </Link>
          </div>
          <div class="link">
          <Link to="/doc-work">
            <button>
            <img src="Doc.png" alt="Document" width="50" height="50"></img>
             </button>
          </Link>
          </div>
          <div class="link">
          <Link to="/photo-list">
            <button>
            <img src="Photo.png" alt="ThePhotoList" width="50" height="50"></img>
             </button>
             </Link>
             </div>
             <div class="link">
          <Link to="/cradit">
            <button>
            <img src="Link.png" alt="Link-List" width="50" height="50"></img>
             </button>
             </Link>
             </div>
      </div>

    )
    
};

export default Home;