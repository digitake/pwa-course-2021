import './App.css';
import './Photo.css';
import{Link} from 'react-router-dom'
function  PhotoList() {
    return(
        <div class="BG">
            <div class="Text">My Gallery</div>
          <div class="gallery">
              <a target="_blank" href="cat-2.jpg">
                  <img src="cat-2.jpg" alt="Mountains" width="600" height="400"></img>
              </a>
              <div class="desc">My favorite cat 1</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="111.png">
                    <img src="111.png" alt="Mountains" width="600" height="400"></img>
                </a>
                <div class="desc">My Cartoon art</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="cat-3.jpg">
                    <img src="cat-3.jpg" alt="Mountains" width="600" height="400"></img>
                </a>
                <div class="desc">My favorite cat 2</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="chatroom 3b by first.jpg">
                    <img src="chatroom 3b by first.jpg" alt="Mountains" width="600" height="400"></img>
                </a>
                <div class="desc">Work room interface</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="funny-cat.jpeg">
                    <img src="funny-cat.jpeg" alt="Mountains" width="600" height="400"></img>
                </a>
                <div class="desc">My favorite cat 3</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="interface design by cha.jpg">
                    <img src="interface design by cha.jpg" alt="Mountains" width="600" height="400"></img>
                </a>
                <div class="desc">Chat room interface</div>
          </div>
          <div class="gallery">    
                <a target="_blank" href=" mobile_app_presenting.jpg">
                    <img src=" mobile_app_presenting.jpg" alt="Mountains" width="600" height="400"></img>
                </a>
                 <div class="desc">Present interface</div>
          </div>
          
          <div class="Link">
           <Link to="/friend-list">
                <button>
                Go to Friend-List
                </button>
            </Link>
            </div>
            
            </div>
       

    )
};

export default PhotoList;