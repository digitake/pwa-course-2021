import { Link } from "react-router-dom";
import './Menu.css';
import{useState}from 'react'

function Menu(){
    return(
        <div className="col-6 col-s-9 Menu">
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
            <div className="col-3 col-s-3 Menu-box">
                <div className=" Menu-column">
                <div className=" Menu-row">
                    <button>
                        <img src="mango-192.png"/>
                    </button>
                    <button>
                        <img src="mango-192.png"/>
                    </button>
                    <button>
                        <img src="mango-192.png"/>
                    </button>
                </div>
                <div className="Menu-row">
                    <button>
                        <img src="mango-192.png"/>
                    </button>
                    <button>
                        <img src="mango-192.png"/>
                    </button>
                    <button>
                        <img src="mango-192.png"/>
                    </button>
                </div>
                </div>
            </div> 
        </div>
          
    );
};


export default Menu;