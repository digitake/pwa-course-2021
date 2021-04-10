import './ProAccount.css';
import { Link } from 'react-router-dom';

function ProAccount() {
    return (
        <div className ="fullscreen-ProAccount">

            <div className ="header-ProAccount">

            </div>

            <div className ="content-ProAccount">

                <div className ="correct-icon">
                    <img src="/Project/ProAccount/correct.png" alt ="/Project/ProAccount/correct.png" 
                    width="600px" height="400px"/>
                </div>

                <Link to ="Prosign">
                    <div className ="goSign-icon">
                        <img src="/Project/ProAccount/gosignin.jpg" alt ="/Project/ProAccount/gosignin.jpg" 
                        width="400px" height="120px"/>
                    </div>
                </Link>

            </div>

            <div className ="footer-ProAccount">

            </div>

        </div>
    );
}

export default ProAccount;