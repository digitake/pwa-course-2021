import './LoginApp.css'
import {Link} from 'react-router-dom'


function LoginPage() {
    return(

        <div className = "Login">

            <div className = "Undo">
                <Link to = "/">
                <img src = "Union.png"  alt = ""/>
                </Link>
            </div>  
            <div>
                <Link to = "/AppChat">
                <button>
                    Go chatroom
                </button>
                </Link>
            </div>
            <div className = "SingIn" >
            <Link to = "/AppChat" >
            <img src = "ButtonSingIn.png" alt = "" />
            </Link>
            </div>

        </div>
    )
}
export default LoginPage;