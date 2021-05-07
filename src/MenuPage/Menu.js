import { Link } from "react-router-dom";
import './Menu.css';
import{useState}from 'react'
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

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
                        <img src="mango-192.png" class ="responsive"/>
                        <h2>Mango setting</h2>
                    </button>
                    <button>
                        <img src="mango-192.png" class ="responsive"/>
                        <h2>Account setting</h2>
                    </button>
                    <button>
                        <img src="mango-192.png" class ="responsive"/>
                        <h2>Friend setting</h2>
                    </button>
                </div>
                <div className="Menu-row">
                    <button>
                        <img src="mango-192.png" class ="responsive"/>
                        <h2>Advance setting</h2>
                    </button>
                    <button>
                        <img src="mango-192.png" class ="responsive"/>
                        <h2>Notifications setting</h2>
                    </button>
                    <button>
                        <img src="mango-192.png" class ="responsive"/>
                        <h2>Game setting</h2>
                    </button>
                </div>
                </div>
            </div> 
        </div>
          
    );
};


export default Menu;