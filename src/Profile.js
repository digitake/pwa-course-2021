import {Link} from "react-router-dom";
import "./Profile.css";
import {Children} from 'react';

function Profile({children}) {
    return(
    // <div className="App col-12">
     <div>  
     <Link to="/App">
     <button>
     Back to chat
     </button>
     </Link>
     <div className="textpro"></div>
      <div className="bgpro">
      <div className="Propic"></div>
      <div className="textname">
     </div>
     {children}
      </div>
     </div>

    );
};
    export default Profile; 