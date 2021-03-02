import './App.css';
import {Link} from 'react-router-dom';


function MainNote() {

    return(

        <div className ="App">

            
            <div className = "noteheader">
           
            </div>

            <div className = "notemid">

            <div className = "circlesbox1">
            <span class="circles">  </span>
            </div>
            
            <div className = "circlesbox2">
            <span class="circles">  </span>
            </div>

            <div className = "circlesbox3">
            <Link to="/" className="image-between">
                    <img src= "plus.png" alt = "plus.png" width="190px" height="190px"/> 
                </Link>
            </div>

            </div>

            <div className = "notebot">
            
            </div>

           








                    <div className ="image-button">

                        
                     <Link to="/" className="image-between">
                    <img src= "profile.png" alt = "profile.png" width="100px" height="100px"/> 
                </Link>

                <Link to="/AllChat" className="image-between">
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


export default MainNote;