import {Link} from 'react-router-dom' 
import './LoginApp.css'

function LoginApp(){
    return(
        <div className = "LogoApp">
            
            <div className = "AppLogin">

                <Link to = '/LoginPage'>
                    <img src="ButtonLogin.png"  alt = "" />
                    
                </Link>
            </div>
            <div className = "AppRegister">
                <Link to = "/Register">
                <img src = "ButtonRegister.png" alt = "" />
                    
                </Link>
            </div>

        </div>
    )
}

export default LoginApp;