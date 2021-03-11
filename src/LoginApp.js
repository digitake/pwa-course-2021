import {Link} from 'react-router-dom' 
import './AppLogin.css'

function LoginApp(){
    return(
        <div className = "LogoApp">
            <div classname = "Logo">
                <img src = "icon-256x256.png"/>
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