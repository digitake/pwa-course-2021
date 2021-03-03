import './Prologin.css';
import { Link } from 'react-router-dom'

function Prologin() {
  return (
    <div className="Prologin">
      <header className="Prologin-header">
         <img className="Prologin-header-logo" src="/images/boxchat.jpg" />
      </header>
      <div className="signin-logo">
        <Link to="/">
           <img src= "/images/sign.jpg" alt = "/images/sign.jpg" />      
        </Link>
      </div>
      <div className="registery-logo">
        <Link to="/">
           <img src= "/images/register.jpg" alt = "/images/register.jpg" />      
        </Link>
      </div>
    </div>
  );
}

export default Prologin;