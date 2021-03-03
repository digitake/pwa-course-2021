import { Link } from "react-router-dom";
import './Menu.css';
import{useState}from 'react'

function Menu(){
    return(
        <div className="Menu">
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