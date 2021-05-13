import './Profile.css';
import App from './App';
import { Link } from 'react-router-dom';
import NormalPage from './NormalPage';

function Profile() {

  
    return (
        <NormalPage>
        <div className ="Profile">
          <div className ="Profile-Pic">
        </div>
        </div>
        <div className ="Profile-name">
           Profile setting
         </div>
         <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">setting 1 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">setting 2 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">setting 3 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">setting 4 </div>
           </div>

           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">setting 5 </div>
           </div>

           
           <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Chat  </div>
           </div>
           </Link>
        </NormalPage>
         
    );
};

export default Profile;
