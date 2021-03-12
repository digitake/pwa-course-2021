import './App.css'
import{Link} from 'react-router-dom'
function TopPhotolist({children}) {
  return (
    <div  className="TopHead2">
      <div className ="Link-Top">
      <div className ="link-margin">
      <Link to="/">
                  <button>
                        <img src="HomeIcon.png" alt="Home" width="30" height="30"></img>
                  </button>
                  </Link>
      </div>
      <div className ="link-margin">
      <Link to="/friend-list">
                  <button>
                        <img src="Friends.png" alt="Friend List" width="30" height="30"></img>
                  </button>
                  </Link>
      </div>
      <div className ="link-margin">
      <Link to="/chat-room">
                  <button>
                  <img src="Chat.png" alt="Chat room" width="30" height="30"></img>
                  </button>
                </Link>
      </div>
      <div className ="link-margin">
      <Link to="/doc-work">
                  <button>
                  <img src="Doc.png" alt="Document" width="30" height="30"></img>
                  </button>
                </Link>
      </div>
      <div className ="link-margin">
      <Link to="/photo-list">
                  <button>
                  <img src="Photo.png" alt="ThePhotoList" width="30" height="30"></img>
                  </button>
                  </Link>
      </div>
      <div className ="link-margin">
      <Link to="/cradit">
                  <button>
                  <img src="Link.png" alt="Link-List"  width="30" height="30"></img>
                  </button>
                  </Link>
      </div>
        </div>
       <div className="App-content">
         {children}
       </div>
    </div>
   
  );
}

export default TopPhotolist;