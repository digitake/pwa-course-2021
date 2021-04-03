import './FriendList.css';
import NormalPage from './NormalPage';
import { Link } from 'react-router-dom';

function FriendList() {
    
    return (
         <NormalPage>
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 1 </div>
           </div>
         
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 2 </div>
           </div>
           
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           
           <div class="desc">Friend 3 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 4 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 5 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Friend 6 </div>
           </div>
         </NormalPage>

    );
};

export default FriendList;