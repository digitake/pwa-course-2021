import './Prologin.css';
import { Link } from 'react-router-dom';

function Prologin() {
  return (
    <div className="fullscreen-login">

      <div className="header-login">

      </div>

      <div className="content-login">

        <div className="main-logo">
          <img src="/Project/Prologin/boxchat.jpg" alt ="/Project/Prologin/boxchat.jpg" 
          width="600px" height="400px"/>
        </div>

        <div className="signin-logo">
          <Link to="/Profriend">
            <img src="/Project/Prologin/sign.jpg" alt ="/Project/Prologin/sign.jpg" 
            width="400px" height="120px"/>
          </Link>
        </div>

        <div className="register-logo">
          <Link to="/">
            <img src="/Project/Prologin/register.jpg" alt ="/Project/Prologin/register.jpg" 
            width="340px" height="100px"/>
          </Link>
        </div>

      </div>

      <div className="footer-login">

      </div>
      
    </div>
  );
}

export default Prologin;