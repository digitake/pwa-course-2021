import './App.css';
import {Link} from 'react-router-dom';

function Content({children}) {
  return (

    <div className = "App">
      
        {children}
      

      <div className ="image-button">

           
             <Link to="/profile" className="image-between">
                 <img src= "profile.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

             <Link to="/AllChat" className="image-between">
                 <img src= "friend list.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

             <Link to="/random-main" className="image-between">
                 <img src= "dice.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

             <Link to="/Note" className="image-between">
                <img src= "list.png" alt = "profile.png" width="100px" height="100px"/> 
             </Link>

            </div>   

    </div>
    
  );
}

export default Content;