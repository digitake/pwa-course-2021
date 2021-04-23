import './FriendList.css';
import NormalPage from './NormalPage';
import { Link } from 'react-router-dom';


function FriendList() {
    
    return (
         <NormalPage>

           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 1 </div>
           </div>
           </Link>

           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 2 </div>
           </div>
           </Link>

           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 3 </div>
           </div>
           </Link>

           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 4 </div>
           </div>
           </Link>

           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 5 </div>
           </div>
           </Link>

           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend  </div>
           </div>
           </Link>

         </NormalPage>

    );
};

export default FriendList;