import './Shop.css';
import NormalPage from './NormalPage';
import { Link } from 'react-router-dom';


function Shop() {
    
    return (
         <NormalPage>
             <Link to="/App">
           <div class="gallery">
           <a target="_blank" href="Profile.jpg"></a>
           <div class="desc">Chat  </div>
           </div>
           </Link>

         </NormalPage>

    );
};

export default Shop;