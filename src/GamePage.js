
import { Link } from "react-router-dom";
import './GamePage.css';
import{useState}from 'react'

function GamePage(){
    return(
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

    );
};



export default GamePage;