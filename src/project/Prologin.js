import './Prologin.css';
import { Link } from 'react-router-dom'

function Prologin({children}) {
  return (
    <div className = "Prologin">

      <div className="header-top">
        {children}
      </div>

      <div className ="background-login">
         
             <div to="/" className="Prologin-logo">
                 <img src= "/Project/Prologin/boxchat.jpg" alt = "/Project/Prologin/boxchat.jpg" 
               width="370px" height="290px"/> 
             </div>

             <Link to="/Profriend" className="signin-logo">
                 <img src= "/Project/Prologin/sign.jpg" alt = "/Project/Prologin/sign.jpg"
               width="320px" height="85px"/> 
             </Link>

             <Link to="/" className="register-logo">
                 <img src= "/Project/Prologin/register.jpg" alt = "/Project/Prologin/register.jpg" 
               width="240px" height="70px"/> 
             </Link>

      </div>   

    </div>
  );
}

export default Prologin;