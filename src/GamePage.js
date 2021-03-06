
import { Link } from "react-router-dom";
import './GamePage.css';
import App from './App';

function GamePage(){
    return(
        <App>
        <div className="GamePage">
            <div>
            Game Page
            <Link to="/">
              <button>
                  Back
               </button>
            </Link>
            </div>
            <div className="Game-header Game-logo">
            </div> 
            <div className="Game-zone">
            </div>
            <div className="">
            </div>
        </div>
        </App>

    );
};



export default GamePage;