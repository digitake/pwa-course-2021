import './Proregister.css';
import { Link } from 'react-router-dom';

function Proregister() {
    return (
      <div className="fullscreen-register">

        <div className="header-register">

        </div>

        <div className="content-register">

          <div className="newAcount-logo">
            <img src="/Project/Proregister/newAcount.jpg" alt="/Project/Proregister/newAcount.jpg" 
            width ="500px" height="100px" />
          </div>

          <div className="usernameInput-logo">
            <img src="/Project/Proregister/usernameText.jpg" alt="/Project/Proregister/usernameText.jpg" 
            width="100px" height="50px" />
          </div>
          <input type="USname" id="Uname" name="username" placeholder="Your Username..."/>

          <div className="passwordInput-logo">
            <img src="/Project/Proregister/passwordText.jpg" alt="/Project/Proregister/passwordText.jpg" 
            width="100px" height="50px" />
          </div>
          <input type="PW" id="Pass" name="passeord" placeholder="Your Password..."/>

          <div className="confirmPassInput-logo">
            <img src="/Project/Proregister/confirmText.jpg" alt="/Project/Proregister/confirmText.jpg" 
            width="160px" height="80px" />
          </div>
          <input type="CON" id="ConPass" name="conPasseord" placeholder="Confirm Your Password..."/>

          <Link to="/">
            <div className="Complete-register-icon">
              <img src="/Project/Proregister/registerComplete.jpg" alt="/Project/Proregister/registerComplete.jpg" 
              width="150px" height="80px" />
            </div>
          </Link>
          
        </div>
  
        <div className="footer-register">
  
        </div>
        
      </div>
      
    );
  }
  
  export default Proregister;