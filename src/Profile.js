import {Link} from "react-router-dom";
import "./Profile.css";


function Profile({childre}) {
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
     {childre}
      </div>
     </div>
     
    );
};
    export default Profile;