import './App.css';
import './Photo.css';
import App from './App'
function  PhotoList() {
    return(
        <App><div class="BG">
            <div class="Text">: My Gallery :</div>
          <div class="gallery">
              <a target="_blank" href="cat-2.jpg">
                  <img src="cat-2.jpg" alt="My favorite cat 1" width="600" height="400"></img>
              </a>
              <div class="desc">My favorite cat 1</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="111.png">
                    <img src="111.png" alt="My Cartoon art" width="600" height="400"></img>
                </a>
                <div class="desc">My Cartoon art</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="cat-3.jpg">
                    <img src="cat-3.jpg" alt="My favorite cat 2" width="600" height="400"></img>
                </a>
                <div class="desc">My favorite cat 2</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="chatroom 3b by first.jpg">
                    <img src="chatroom 3b by first.jpg" alt="Work room interface" width="600" height="400"></img>
                </a>
                <div class="desc">Work room interface</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="funny-cat.jpeg">
                    <img src="funny-cat.jpeg" alt="My favorite cat 3" width="600" height="400"></img>
                </a>
                <div class="desc">My favorite cat 3</div>
          </div>
          <div class="gallery">
                <a target="_blank" href="interface design by cha.jpg">
                    <img src="interface design by cha.jpg" alt="Chat room interface" width="600" height="400"></img>
                </a>
                <div class="desc">Chat room interface</div>
          </div>
          <div class="gallery">    
                <a target="_blank" href=" mobile_app_presenting.jpg">
                    <img src=" mobile_app_presenting.jpg" alt="Present interface" width="600" height="400"></img>
                </a>
                 <div class="desc">Present interface</div>
          </div>          
            </div></App>
            
        
    )
};

export default PhotoList;