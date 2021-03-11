import {Link} from 'react-router-dom'
import './AppMat.css'

function SettingPage() {

    return(

        <div className = "SettingPage">
            <div className = "Undo2" >
                <Link to = "/HomePage">
                    <img src = "Union(1).png" alt = "" /> 
                </Link> 
            </div>
            <div className  = "LogOut">
            <Link to = "/">
                    <img src = "LogOut.png" alt = "" /> 
                </Link>
            </div>
        </div>

    )   
};

export default SettingPage;