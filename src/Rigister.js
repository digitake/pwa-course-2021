import './AppLogin.css'
import {Link} from 'react-router-dom'


function Register(){
    return(
    <div className = "Register">
        <div className = "Undo">
             <Link to = "/">
                <img src = "Union.png"  alt = ""/>
             </Link>
        </div>

        <div className = "RegisterNextStep">
        <Link to = "/RegisterNextStep">
            <img src = "ButtonNext.png" alt = "" /> 
        </Link>
        </div>

    </div>
    )
}
export default Register;