import {Link} from 'react-router-dom' 
import './LoginApp.css'

function LoginApp(){
    return(
        <div className = "LogoApp">
            
            <div className = "AppLogin">
                <Link to = '/Chat-Room'>
                    <img src="ButtonLogin.png"  alt = "" />
                    
                </Link>
            </div>
            <div className = "AppRegister">
                <Link>
                <img src = "ButtonRegister.png" alt = "" />
                    
                </Link>
            </div>

        </div>
    )
}

export default LoginApp;