import {Link} from 'react-router-dom'
import './AppRegister.css';

function RegisterNextStep() {
    return(
        <div className = "NextStep">

            <div className = "Undo">
                <Link to = "/Register">
                    <img src = "Union.png"  alt = ""/>
                </Link>

            </div>
            <div className = "Register-Logo"/>

            <div className = "Register-singIn"/>

            <div className = "Register-recapcha"/>
        
            <div className = "SingUP">

                <Link to = "/HomePage">
                    <img src = "ButtonSingUP.png" alt = "" />
                </Link>

            </div>

        </div>
    )

}
export default RegisterNextStep;