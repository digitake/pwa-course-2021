import {Link} from 'react-router-dom' 
import './LoginApp.css'

function LoginApp(){
    return(
        <div className = "LoginApp">
            
            <div className = "AppLogin">
                Login Page
                <Link to = '/Chat-Room'>
                    <button>
                        Go chatroom
                    </button>
                </Link>
            </div>
            <div className = "AppRegister">
                Register Page
                <Link>
                <button>
                       Go register
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default LoginApp;