import './Image.css';
import App from './App';
import { Link } from "react-router-dom";

function Image(){
    return(
    <div className="Image">
        <div className="Image-background">
        
        </div>

        <div className="Image-header">
            <div className="Image-room-Button">
             <Link to = "/profile">
               <image>
               <img src ="back-32.png" align ="lift"/>
               </image>
             </Link>
           </div>

        </div>
    </div>
    );
};

export default Image;