import {Link} from 'react-router-dom' 
import './AppLogin.css'

function LoginApp(){
    return(
        <div className = "LogoApp">
            
            <div classname = "LogoE">
            
            </div>

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