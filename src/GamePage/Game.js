
import { Link } from "react-router-dom";
import './Game.css';
import App from '../App';

function Game(){
    return(
        <App>
        <div className="Game-header">
          <p1>GAME</p1>
        </div>

        <div className="Game-Box">
            
             <Link to = "/Game01">
             <button class="Game-Button">Push the box</button>
             </Link>
             <Link to = "/Game02">
             <button class="Game-Button">Shooting star</button>
             </Link>
             <Link to = "/Game03">
             <button class="Game-Button">Found in space</button>
             </Link>
             <Link to = "/Game04">
             <button class="Game-Button">Ungravity forest</button>
             </Link>
             <Link to = "/Game05">
             <button class="Game-Button">Spacebus</button>
             </Link>
             <Link to = "/Game06">
             <button class="Game-Button">The impossible</button>
             </Link>
             <Link to = "/Game07">
             <button class="Game-Button">Tightly bound</button>
             </Link>
             <Link to = "/Game08">
             <button class="Game-Button">Polarity</button>
             </Link>
             <Link to = "/Game09">
             <button class="Game-Button">Mount mound</button>
             </Link>
             <Link to = "/Game10">
             <button class="Game-Button">Thelast io</button>
             </Link>
             <Link to = "/Game11">
             <button class="Game-Button">Shape quest</button>
             </Link>
             <Link to = "/Game12">
             <button class="Game-Button">Thunder space</button>
             </Link>
            
        </div>
        </App>

    );
};


export default Game;