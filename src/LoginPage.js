import './LoginApp.css'
import {Link} from 'react-router-dom'


function LoginPage() {
    return(

        <div className = "Login">

            <div className = "Undo">
                <Link to = "/">
                <img scr = "Union.png"  alt = ""/>
                </Link>
            </div>  
            <div>
                <Link to = "/AppChat">
                <button>
                    Go chatroom
                </button>
                </Link>
            </div>
            <div>
                <Link to = "/" >
                <button>
                    Go Login
                </button>
                </Link>
            </div>

        </div>
    )
}
export default LoginPage;