import { Link } from "react-router-dom";
import './Game.css';
import{useState}from 'react'

function Game(){
    return(
        <div className="Game">
            <div className="BackButton">
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

export default Game;