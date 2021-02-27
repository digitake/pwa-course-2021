import './App.css';
import {Link} from 'react-router-dom';

function ProjectMain(){
    return(
     <div className ="App">
         <div className ="Test">
             Hello Help me
         </div>

         <div className ="image-button">

           
            <Link to="/" className="image-between">
                   <img src= "profile.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>
            
            <Link to="/" className="image-between">
                <img src= "friend list.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>

            <Link to="/" className="image-between">
                <img src= "dice.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>

            <Link to="/" className="image-between">
                <img src= "list.png" alt = "profile.png" width="100px" height="100px"/> 
            </Link>

         </div>
     </div>
    );
}

export default ProjectMain;