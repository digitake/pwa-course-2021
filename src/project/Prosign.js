import './Prosign.css';
import { Link } from 'react-router-dom';

function Prosign() {
    return (
        <div className ="fullscreen-signin">

            <div className ="header-signin">

            </div>

            <div className ="content-signin">

                <div className ="boxchatlogo-signin">
                    <img src="/Project/Prologin/boxchat.jpg" alt ="/Project/Prologin/boxchat.jpg" 
                    width="600px" height="450px"/>
                </div>

                <div className ="user-signin">
                    <img src="/Project/Proregister/usernameText.jpg" alt="/Project/Proregister/usernameText.jpg" 
                    width="100px" height="50px" /> 
                </div>

                <input type="USname-sign" id="UnameSign" name="usernameSign" placeholder="Your Username..."/>

                <div className ="pass-signin">
                    <img src="/Project/Proregister/passwordText.jpg" alt="/Project/Proregister/passwordText.jpg" 
                    width="100px" height="50px" />
                </div>

                <input type="PW-sign" id="PassSign" name="passeordSign" placeholder="Your Password..."/>

                <Link to="/Profriend">
                <div className ="logosignin-sign">
                    <img src="/Project/Prologin/sign.jpg" alt ="/Project/Prologin/sign.jpg" 
                    width="350px" height="100px"/>
                </div>
                </Link>

            </div>

            <div className ="footer-signin">

            </div>

        </div>
    );
}
    
export default Prosign;