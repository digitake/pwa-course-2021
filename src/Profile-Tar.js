import { Link } from 'react-router-dom';
import "./Profile-Tar.css";
function Profiletar() {
    return(
    // <div className="App col-12">
     <div>  
     <Link to="/">
     <button>
     Back to chat
     </button>
     </Link>
     <div className="textpro">Profile</div>
      <div className="bgpro">
      <div className="Propic"></div>
      <div className="textname">Ratpakorn Suntornsarathul
     </div>
     
      </div>
      
     </div>
     
    );
};
    export default Profiletar;