import './Game';
import App from '../App';
import './Game.css';

function Game02(){
    return(
        <App>
        <div className="GamePage">
            
            <iframe width="100%" height="700px" src="https://simmer.io/@MixedDuo/mars-shooter" 
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
        </div>
        </App>
    );
};


export default Game02;