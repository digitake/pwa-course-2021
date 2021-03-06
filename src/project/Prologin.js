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
                 <img src= "/images/boxchat.jpg" alt = "/images/boxchat.jpg" 
               width="370px" height="290px"/> 
             </div>

             <Link to="/" className="signin-logo">
                 <img src= "/images/sign.jpg" alt = "/images/sign.jpg"
               width="320px" height="85px"/> 
             </Link>

             <Link to="/" className="register-logo">
                 <img src= "/images/register.jpg" alt = "/images/register.jpg" 
               width="240px" height="70px"/> 
             </Link>

      </div>   

    </div>
  );
}

export default Prologin;