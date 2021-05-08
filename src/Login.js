import './style.css';
import { Link } from "react-router-dom";


function Login(){
    return(

        <div className = "background">
           
             <div className = "box">
                Mango Talk
                <Link to= "/profile">
                <div className = "boxinput">
                    LOGIN
                </div>
                </Link>
              </div>
              
        </div>

    );
}

export default Login