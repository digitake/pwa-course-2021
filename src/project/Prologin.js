import './Prologin.css';
import { Link } from 'react-router-dom'

function Prologin() {
  return (
    <div className="Prologin">
      <header className="Prologin-header">
         <img className="Prologin-header-logo" src="/Project/Prologin/boxchat.jpg" />
      </header>
      <div className="signin-logo">
        <Link to="/">
           <img src= "/Project/Prologin/sign.jpg" alt = "/Project/Prologin/sign.jpg" />      
        </Link>
      </div>
      <div className="registery-logo">
        <Link to="/">
           <img src= "/Project/Prologin/register.jpg" alt = "/Project/Prologin/register.jpg" />      
        </Link>
      </div>
    </div>
  );
}

export default Prologin;