import './Login.css';
import { Link } from 'react-router-dom';



function Login() {
    
    return(
        <div className ="Login-main">
        <Link to="/">
            <div className ="Login-button">
                Login
               </div>
             </Link>
        </div>
        

    );
};

export default Login;
