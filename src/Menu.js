import { Link } from "react-router-dom";
import './Menu.css';
import{useState}from 'react'

function Menu(){
    return(
        <div className="Menu">
            <div className="Menu-header">
                <div className ="space-box">
                </div>
                <div className="Menu-Back-Button">
                    Menu
                <Link to = "/">
                <img src= "Back-32.png" align ="left"/>
                </Link>
                </div>
            </div>
            <div className="Menu-box">
            </div> 
            <div className="">
            </div>


        
        </div>
          
    );
};

export default Menu;