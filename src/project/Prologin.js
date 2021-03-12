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
<<<<<<< HEAD
                 <img src= "/images/boxchat.jpg" alt = "/images/boxchat.jpg" 
               width="370px" height="290px"/> 
             </div>

             <Link to="/" className="signin-logo">
                 <img src= "/images/sign.jpg" alt = "/images/sign.jpg"
=======
                 <img src= "/Project/Prologin/boxchat.jpg" alt = "/Project/Prologin/boxchat.jpg" 
               width="370px" height="290px"/> 
             </div>

             <Link to="/Profriend" className="signin-logo">
                 <img src= "/Project/Prologin/sign.jpg" alt = "/Project/Prologin/sign.jpg"
>>>>>>> 433c972f817d0429cf5ab09923f22c688ed4316d
               width="320px" height="85px"/> 
             </Link>

             <Link to="/" className="register-logo">
<<<<<<< HEAD
                 <img src= "/images/register.jpg" alt = "/images/register.jpg" 
=======
                 <img src= "/Project/Prologin/register.jpg" alt = "/Project/Prologin/register.jpg" 
>>>>>>> 433c972f817d0429cf5ab09923f22c688ed4316d
               width="240px" height="70px"/> 
             </Link>

      </div>   

    </div>
  );
}

export default Prologin;