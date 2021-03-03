
import { Link } from "react-router-dom";

function GamePage(){
    return(
        <div>
            Game Page
            <Link to="/">
              <button>
                  Back
               </button>
            </Link>
        </div>

    );
};

export default GamePage;