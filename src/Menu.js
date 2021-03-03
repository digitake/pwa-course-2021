import { Link } from "react-router-dom";
import './Menu.css';
import{useState}from 'react'

function Menu(){
    return(
        <div className="Menu">
            <div className="App-header App-logo ">
            <div className="Setting-Back-Button">
             <Link to = "/">
              <img src= "Back-32.png"/>
             </Link>
            </div>
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

export default Menu;