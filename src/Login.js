import './style.css';
import { Link } from "react-router-dom";


function Login(){
    return(

        <div className = "body">
           
             <div className = "box">
                Mango Talk
                <Link to= "/profile">
                <div className = "boxinput">
                    LOING
                </div>
                </Link>
              </div>
              
        </div>

    );
}

export default Login